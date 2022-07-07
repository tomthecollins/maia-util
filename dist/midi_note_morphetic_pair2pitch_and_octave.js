"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = midi_note_morphetic_pair2pitch_and_octave;
var pitch_class_lookup_array = [[[12, 6], "B#"], [[0, 0], "C"], [[0, 1], "Dbb"], [[13, 6], "B##"], [[1, 0], "C#"], [[1, 1], "Db"], [[2, 0], "C##"], [[2, 1], "D"], [[2, 2], "Ebb"], [[3, 1], "D#"], [[3, 2], "Eb"], [[3, 3], "Fbb"], [[4, 1], "D##"], [[4, 2], "E"], [[4, 3], "Fb"], [[5, 2], "E#"], [[5, 3], "F"], [[5, 4], "Gbb"], [[6, 2], "E##"], [[6, 3], "F#"], [[6, 4], "Gb"], [[7, 3], "F##"], [[7, 4], "G"], [[7, 5], "Abb"], [[8, 4], "G#"], [[8, 5], "Ab"], [[9, 4], "G##"], [[9, 5], "A"], [[9, 6], "Bbb"], [[-2, 0], "Cbb"], [[10, 5], "A#"], [[10, 6], "Bb"], [[11, 5], "A##"], [[11, 6], "B"], [[-1, 0], "Cb"]];

function midi_note_morphetic_pair2pitch_and_octave(mnn, mpn) {
  // Tom Collins 15/10/2014.
  // In
  // mnn Integer mandatory
  // mpn Integer mandatory
  // Out String
  // This function converts a pair consisting of a MIDI note number and a
  // morphetic pitch number into a string consisting of a note's pitch and
  // octave.

  var octave = Math.floor((mpn - 32) / 7);
  var midi_residue = mnn - 12 * (octave + 1);
  var mpn_residue = mpn - (7 * octave + 32);

  var pitch_class_idx = undefined;
  var n = pitch_class_lookup_array.length;
  var i = 0;
  while (i < n) {
    if (midi_residue == pitch_class_lookup_array[i][0][0] && mpn_residue == pitch_class_lookup_array[i][0][1]) {
      pitch_class_idx = i;
      i = n - 1;
    }
    i = i + 1;
  }
  var a = pitch_class_lookup_array[pitch_class_idx][1] + octave;
  return a;
};