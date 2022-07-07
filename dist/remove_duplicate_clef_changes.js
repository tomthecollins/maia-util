"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove_duplicate_clef_changes;
function remove_duplicate_clef_changes(clef_changes) {
  // Tom Collins 23/2/2015.
  // In
  // clef_changes Array mandatory
  // Out Array
  // This function inspects pairs of clef changes. If there is a clef change
  // in bar n, and a clef change to the same clef in bar n + 1, the clef
  // change in bar n is removed because it is probably a cautionary.

  var arr_out = [];
  for (var clefi = 0; clefi < clef_changes.length - 1; clefi++) {
    if (clef_changes[clefi + 1].barNo != clef_changes[clefi].barNo + 1 || clef_changes[clefi + 1].clef != clef_changes[clefi].clef || clef_changes[clefi + 1].staffNo != clef_changes[clefi].staffNo) {
      arr_out.push(clef_changes[clefi]);
    }
  }
  if (clef_changes.length > 0) {
    arr_out.push(clef_changes[clef_changes.length - 1]);
  }
  return arr_out;
}