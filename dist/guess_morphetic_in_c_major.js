"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guess_morphetic_in_c_major;
var midi_residue_lookup_array = [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2], [5, 3], [6, 3], [7, 4], [8, 4], [9, 5], [10, 6], [11, 6]];

function guess_morphetic_in_c_major(mnn) {
  // Tom Collins 15/10/2014.
  // In
  // mnn Integer mandatory
  // Out Integer
  // This function takes a MIDI note number as its only argument. It
  // attempts to guess the corresponding morphetic pitch number, assuming
  // a key of or close to C major.

  var octave = Math.floor(mnn / 12 - 1);
  var midi_residue = mnn - 12 * (octave + 1);

  var midi_residue_idx = 0;
  var n = midi_residue_lookup_array.length;
  var i = 0;
  while (i < n) {
    if (midi_residue == midi_residue_lookup_array[i][0]) {
      midi_residue_idx = i;
      i = n - 1;
    }
    i = i + 1;
  }
  var mpn_residue = midi_residue_lookup_array[midi_residue_idx][1];
  var a = mpn_residue + 7 * octave + 32;
  return a;
};