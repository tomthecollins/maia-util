'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tonic_pitch_closest;

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

var _min_argmin = require('./min_argmin');

var _min_argmin2 = _interopRequireDefault(_min_argmin);

var _pitch_and_octave2midi_note_morphetic_pair = require('./pitch_and_octave2midi_note_morphetic_pair');

var _pitch_and_octave2midi_note_morphetic_pair2 = _interopRequireDefault(_pitch_and_octave2midi_note_morphetic_pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tonic_pitch_closest(points, key_name) {
  // Tom Collins 22/1/2016.
  // In
  // points Array mandatory
  // key_name String mandatory
  // Out Array
  // This function returns the MIDI note and morphetic pitch numbers of the tonic
  // pitch that is closest to the mean of the input point set, whose key
  // (estimate) is specified as the second input argument.

  // Get the pitch class.
  var pitch_class = key_name.split(" ")[0];
  // Create an array of MNN-MPN pairs for this pitch class across the octaves.
  var min_idx = 1;
  if (pitch_class == "A" || pitch_class == "Bb" || pitch_class == "B") {
    min_idx = 0;
  }
  var max_idx = 7;
  if (pitch_class == "C") {
    max_idx = 8;
  }
  var MNN_MPNs = [];
  for (var i = min_idx; i <= max_idx; i++) {
    var curr_pitch = pitch_class + i.toString();
    MNN_MPNs.push((0, _pitch_and_octave2midi_note_morphetic_pair2.default)(curr_pitch));
  }

  var mu = (0, _mean2.default)(points.map(function (a) {
    return a[1];
  }));
  var mnn_mu = MNN_MPNs.map(function (a) {
    return Math.abs(a[0] - mu);
  });
  min_idx = (0, _min_argmin2.default)(mnn_mu);
  return MNN_MPNs[min_idx[1]];
}