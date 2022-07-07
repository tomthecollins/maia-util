import copy_array_object from './copy_array_object'
import count_rows from './count_rows'
import max_argmax from './max_argmax'
import corr from './corr'
import cyclically_permute_array_by from './cyclically_permute_array_by'
import orthogonal_projection_not_unique_equalp from './orthogonal_projection_not_unique_equalp'

// Keyscape.
// Setup the key profiles.
var key_names = [
  "C major", "Db major", "D major", "Eb major", "E major", "F major",
  "Gb major", "G major", "Ab major", "A major", "Bb major", "B major",
  "C minor", "C# minor", "D minor", "Eb minor", "E minor", "F minor",
  "F# minor", "G minor", "G# minor", "A minor", "Bb minor", "B minor"];

export const aarden_key_profiles = {};
for (let ikey = 0; ikey < 12; ikey++){
  aarden_key_profiles[key_names[ikey]] =
    cyclically_permute_array_by(
    [
      17.77, 0.15, 14.93, 0.16, 19.8, 11.36, 0.29, 22.06, 0.15, 8.15, 0.23,
      4.95
    ],
    -ikey
  );
}
for (let ikey = 12; ikey < 24; ikey++){
  aarden_key_profiles[key_names[ikey]] =
    cyclically_permute_array_by(
    [
      18.26, 0.74, 14.05, 16.86, 0.7, 14.44, 0.7, 18.62, 4.57, 1.93, 7.38, 1.76
    ],
    -ikey
  );
}

export const krumhansl_and_kessler_key_profiles = {};
for (let ikey = 0; ikey < 12; ikey++){
  krumhansl_and_kessler_key_profiles[key_names[ikey]] =
    cyclically_permute_array_by(
    [
      6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88
    ],
    -ikey
  );
}
for (let ikey = 12; ikey < 24; ikey++){
  krumhansl_and_kessler_key_profiles[key_names[ikey]] =
    cyclically_permute_array_by(
    [
      6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17
    ],
    -ikey
  );
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
export function fifth_steps_mode(point_set, key_profiles, MNN_idx, dur_idx){
  if (MNN_idx == undefined){
    MNN_idx = 1;
  }
  if (dur_idx == undefined){
    dur_idx = 2;
  }

  // Copy the point_set variable.
  var pts = copy_array_object(point_set);
  // Convert the MNNs to MNNs mod 12.
  for (let i = 0; i < pts.length; i++){
    pts[i][MNN_idx] = pts[i][MNN_idx] % 12;
  }
  // Get the MNN12s and durations in an array. Begin by constructing the
  // indicator to pass to orthogonal_projection_not_unique_equalp.
  var indicator = [];
  for (let i = 0; i < pts[0].length; i++){
    if (i == MNN_idx || i == dur_idx){
      indicator[i] = 1;
    }
    else{
      indicator[i] = 0;
    }
  }
  var arr = orthogonal_projection_not_unique_equalp(pts, indicator);
  let wght_idx;
  // Form a distribution over the MNN12s, weighted by duration.
  if (dur_idx >= MNN_idx){
    wght_idx = 1;
  }
  else{
    wght_idx = 0;
  }
  var MNN12_and_distbn = count_rows(arr, wght_idx);
  // Convert to a key profile.
  var idxs = [];
  for (let i = 0; i < MNN12_and_distbn[0].length; i++){
    idxs.push(MNN12_and_distbn[0][i][0]);
  }
  var kp = [];
  for (let i = 0; i < 12; i++){
    kp[i] = 0;
  }
  for (let i = 0; i < idxs.length; i++){
    kp[idxs[i]] = MNN12_and_distbn[1][i];
  }

  // Calculate the correlation between the empirical key profile and each of
  // the theoretical key profiles.
  var key_names = Object.keys(key_profiles);
  var r = [];
  for (let i = 0; i < 24; i++){
    r[i] = corr(kp, key_profiles[key_names[i]]);
  }

  // Prepare the return in terms of fith steps and mode.
  var corr_and_key = max_argmax(r);
  var quasi_key = corr_and_key[1];
  var steps = [0, -5, 2, -3, 4, -1, 6, 1, -4, 3, -2, 5];
  var mode = 0;
  if (quasi_key >= 12){
    mode = 5;
  }
  return [key_names[quasi_key], corr_and_key[0], steps[quasi_key % 12], mode];
}
