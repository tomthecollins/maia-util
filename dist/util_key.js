'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.krumhansl_and_kessler_key_profiles = exports.aarden_key_profiles = undefined;
exports.fifth_steps_mode = fifth_steps_mode;

var _copy_array_object = require('./copy_array_object');

var _copy_array_object2 = _interopRequireDefault(_copy_array_object);

var _count_rows = require('./count_rows');

var _count_rows2 = _interopRequireDefault(_count_rows);

var _max_argmax = require('./max_argmax');

var _max_argmax2 = _interopRequireDefault(_max_argmax);

var _corr = require('./corr');

var _corr2 = _interopRequireDefault(_corr);

var _cyclically_permute_array_by = require('./cyclically_permute_array_by');

var _cyclically_permute_array_by2 = _interopRequireDefault(_cyclically_permute_array_by);

var _orthogonal_projection_not_unique_equalp = require('./orthogonal_projection_not_unique_equalp');

var _orthogonal_projection_not_unique_equalp2 = _interopRequireDefault(_orthogonal_projection_not_unique_equalp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Keyscape.
// Setup the key profiles.
var key_names = ["C major", "Db major", "D major", "Eb major", "E major", "F major", "Gb major", "G major", "Ab major", "A major", "Bb major", "B major", "C minor", "C# minor", "D minor", "Eb minor", "E minor", "F minor", "F# minor", "G minor", "G# minor", "A minor", "Bb minor", "B minor"];

var aarden_key_profiles = exports.aarden_key_profiles = {};
for (var ikey = 0; ikey < 12; ikey++) {
  aarden_key_profiles[key_names[ikey]] = (0, _cyclically_permute_array_by2.default)([17.77, 0.15, 14.93, 0.16, 19.8, 11.36, 0.29, 22.06, 0.15, 8.15, 0.23, 4.95], -ikey);
}
for (var _ikey = 12; _ikey < 24; _ikey++) {
  aarden_key_profiles[key_names[_ikey]] = (0, _cyclically_permute_array_by2.default)([18.26, 0.74, 14.05, 16.86, 0.7, 14.44, 0.7, 18.62, 4.57, 1.93, 7.38, 1.76], -_ikey);
}

var krumhansl_and_kessler_key_profiles = exports.krumhansl_and_kessler_key_profiles = {};
for (var _ikey2 = 0; _ikey2 < 12; _ikey2++) {
  krumhansl_and_kessler_key_profiles[key_names[_ikey2]] = (0, _cyclically_permute_array_by2.default)([6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88], -_ikey2);
}
for (var _ikey3 = 12; _ikey3 < 24; _ikey3++) {
  krumhansl_and_kessler_key_profiles[key_names[_ikey3]] = (0, _cyclically_permute_array_by2.default)([6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17], -_ikey3);
}

/**
 * This function is an implementation of the Krumhansl-Schmuckler key-finding
 * algorithm. It returns a key estimate for the input points.
 *
 * @author Tom Collins and Christian Coulon
 * @comment 6th November 2015
 * @tutorial key-estimation-1
 * @param {PointSet} point_set - A point set
 * @param {number[][]} key_profiles - An array of arrays of 12-element vectors,
 * where each vector is a cylic permutation of its neighbour. These are
 * empirically derived weightings of the pitch-class content of each of the
 * major and minor keys. There is a choice between
 * `krumhansl_and_kessler_key_profiles` and `aarden_key_profiles`, which have
 * different weightings.
 * @param {number} [MNN_idx=1] - The dimension of MIDI note numbers in `ps`
 * @param {number} [dur_idx=2] - The dimension of durations in `ps`
 * @return {Object} [string, number, number, number] An array whose first
 * element is a key name (e.g., "C major" for C major), whose second element is
 * the maximum correlation value, whose third element is steps on the circle of
 * fifths (e.g., -1 for F major), and whose fourth element is mode (e.g., 5 for
 * minor/Aeolian). So for instance, a key estimate of A minor might have output
 * `["A minor", .8, 3, 5]`.
 *
 * @example
 *     var ps = [
 *   [0, 56, 1],
 *   [0.5, 60, 1],
 *   [1, 58, 1],
 *   [1.5, 61, 1],
 *   [2, 60, 1],
 *   [2.5, 63, 1],
 *   [3, 61, 1],
 *   [3.5, 65, 1],
 *   [4, 63, 1],
 *   [4.5, 67, 1],
 *   [5, 65, 1],
 *   [5.5, 68, 1],
 *   [6, 67, 1],
 *   [6.5, 70, 1],
 *   [7, 68, 2]
 * ];
 * fifth_steps_mode(ps, krumhansl_and_kessler_key_profiles)
 * →
 * [
 *   "Ab major", // Estimated key
 *   0.90135,    // Winning (maximal) correlation
 *   -4,         // Steps on the circle of fifths for Ab
 *   0           // Mode (major/Ionian)
 * ]
 */
function fifth_steps_mode(point_set, key_profiles, MNN_idx, dur_idx) {
  if (MNN_idx == undefined) {
    MNN_idx = 1;
  }
  if (dur_idx == undefined) {
    dur_idx = 2;
  }

  // Copy the point_set variable.
  var pts = (0, _copy_array_object2.default)(point_set);
  // Convert the MNNs to MNNs mod 12.
  for (var i = 0; i < pts.length; i++) {
    pts[i][MNN_idx] = pts[i][MNN_idx] % 12;
  }
  // Get the MNN12s and durations in an array. Begin by constructing the
  // indicator to pass to orthogonal_projection_not_unique_equalp.
  var indicator = [];
  for (var _i = 0; _i < pts[0].length; _i++) {
    if (_i == MNN_idx || _i == dur_idx) {
      indicator[_i] = 1;
    } else {
      indicator[_i] = 0;
    }
  }
  var arr = (0, _orthogonal_projection_not_unique_equalp2.default)(pts, indicator);
  var wght_idx = void 0;
  // Form a distribution over the MNN12s, weighted by duration.
  if (dur_idx >= MNN_idx) {
    wght_idx = 1;
  } else {
    wght_idx = 0;
  }
  var MNN12_and_distbn = (0, _count_rows2.default)(arr, wght_idx);
  // Convert to a key profile.
  var idxs = [];
  for (var _i2 = 0; _i2 < MNN12_and_distbn[0].length; _i2++) {
    idxs.push(MNN12_and_distbn[0][_i2][0]);
  }
  var kp = [];
  for (var _i3 = 0; _i3 < 12; _i3++) {
    kp[_i3] = 0;
  }
  for (var _i4 = 0; _i4 < idxs.length; _i4++) {
    kp[idxs[_i4]] = MNN12_and_distbn[1][_i4];
  }

  // Calculate the correlation between the empirical key profile and each of
  // the theoretical key profiles.
  var key_names = Object.keys(key_profiles);
  var r = [];
  for (var _i5 = 0; _i5 < 24; _i5++) {
    r[_i5] = (0, _corr2.default)(kp, key_profiles[key_names[_i5]]);
  }

  // Prepare the return in terms of fith steps and mode.
  var corr_and_key = (0, _max_argmax2.default)(r);
  var quasi_key = corr_and_key[1];
  var steps = [0, -5, 2, -3, 4, -1, 6, 1, -4, 3, -2, 5];
  var mode = 0;
  if (quasi_key >= 12) {
    mode = 5;
  }
  return [key_names[quasi_key], corr_and_key[0], steps[quasi_key % 12], mode];
}