"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clef_sign_and_line2clef_name;
var lookup = [{ "sign": "G", "line": 2, "name": "treble clef" }, { "sign": "G", "line": 2, "clefOctaveChange": 1, "name": "treble clef 8va" }, { "sign": "G", "line": 2, "clefOctaveChange": 2, "name": "treble clef 15ma" }, { "sign": "G", "line": 2, "clefOctaveChange": -1, "name": "treble clef 8vb" }, { "sign": "G", "line": 1, "name": "French violin clef" }, { "sign": "C", "line": 1, "name": "soprano clef" }, { "sign": "C", "line": 2, "name": "mezzo-soprano clef" }, { "sign": "C", "line": 3, "name": "alto clef" }, { "sign": "C", "line": 4, "name": "tenor clef" }, { "sign": "C", "line": 4, "name": "baritone clef (C clef)" }, { "sign": "F", "line": 4, "name": "bass clef" }, { "sign": "F", "line": 4, "clefOctaveChange": 1, "name": "bass clef 8va" }, { "sign": "F", "line": 4, "clefOctaveChange": 2, "name": "bass clef 15ma" }, { "sign": "F", "line": 4, "clefOctaveChange": -1, "name": "bass clef 8vb" }, { "sign": "F", "line": 4, "clefOctaveChange": -2, "name": "bass clef 15mb" }, { "sign": "F", "line": 3, "name": "baritone clef (F clef)" }, { "sign": "F", "line": 5, "name": "subbass clef 15mb" },
// These last two do not seem to be supported.
{ "sign": "percussion", "line": 2, "name": "percussion clef" }, { "sign": "TAB", "line": 0, "name": "tablature" }];

function clef_sign_and_line2clef_name(sign, line, clef_octave_change) {

  var i = 0;
  while (i < lookup.length) {
    if (lookup[i].sign == sign && lookup[i].line == line && (clef_octave_change == undefined || lookup[i].clefOctaveChange && lookup[i].clefOctaveChange == clef_octave_change)) {
      var clef_name = lookup[i].name;
      i = lookup.length - 1;
    }
    i++;
  }
  if (clef_name == undefined) {
    return "unknown";
  } else {
    return clef_name;
  }
}