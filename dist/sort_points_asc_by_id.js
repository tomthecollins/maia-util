"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort_points_asc_by_id;
function sort_points_asc_by_id(a, b) {
  // Tom Collins 18/2/2015.
  // In
  // a Object mandatory
  // b Object mandatory
  // Out Object
  // A helper function, to sort two notes (points) or rests ascending by the
  // values in the id field.

  var c = a.ID;
  var d = b.ID;
  if (typeof c == "string") {
    c = parseFloat(c);
  }
  if (typeof d == "string") {
    d = parseFloat(d);
  }
  return c - d;
}