"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pitch_and_octave2midi_note_morphetic_pair;
var pitch_class_lookup_array = [[[12, 6], "B#"], [[0, 0], "C"], [[0, 1], "Dbb"], [[13, 6], "B##"], [[1, 0], "C#"], [[1, 1], "Db"], [[2, 0], "C##"], [[2, 1], "D"], [[2, 2], "Ebb"], [[3, 1], "D#"], [[3, 2], "Eb"], [[3, 3], "Fbb"], [[4, 1], "D##"], [[4, 2], "E"], [[4, 3], "Fb"], [[5, 2], "E#"], [[5, 3], "F"], [[5, 4], "Gbb"], [[6, 2], "E##"], [[6, 3], "F#"], [[6, 4], "Gb"], [[7, 3], "F##"], [[7, 4], "G"], [[7, 5], "Abb"], [[8, 4], "G#"], [[8, 5], "Ab"], [[9, 4], "G##"], [[9, 5], "A"], [[9, 6], "Bbb"], [[-2, 0], "Cbb"], [[10, 5], "A#"], [[10, 6], "Bb"], [[11, 5], "A##"], [[11, 6], "B"], [[-1, 0], "Cb"]];

function pitch_and_octave2midi_note_morphetic_pair(pitch_and_octave) {
  // Tom Collins 15/10/2014.
  // In
  // pitch_and_octave String mandatory
  // Out Array
  // This function converts a string consisting of a note's pitch and octave
  // into a  pair consisting of a MIDI note number and a morphetic pitch
  // number.

  var length_arg = pitch_and_octave.length;
  var pitch_class = pitch_and_octave.slice(0, length_arg - 1);
  var octave = pitch_and_octave[length_arg - 1];

  var pitch_class_idx = 1;
  var n = pitch_class_lookup_array.length;
  var i = 0;
  while (i < n) {
    if (pitch_class == pitch_class_lookup_array[i][1]) {
      pitch_class_idx = i;
      i = n - 1;
    }
    i = i + 1;
  }
  var midi_mpn_residue = pitch_class_lookup_array[pitch_class_idx][0];
  var a = [];
  a[0] = 12 * octave + 12 + midi_mpn_residue[0];
  a[1] = 7 * octave + 32 + midi_mpn_residue[1];
  return a;
};