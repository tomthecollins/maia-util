"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = restrict_point_set_in_nth_to_xs;
function restrict_point_set_in_nth_to_xs(point_set, n, xs) {
  // Tom Collins 24/11/2014.
  // In
  // point_set Array mandatory
  // n Integer mandatory
  // xs Array mandatory
  // Out Array
  // The first argument to this function is an array consisting of numeric
  // arrays of uniform dimension (what I call a point set). We are interested
  // in the nth element of each array, where n is the second argument. A point
  // is retained in the output if its nth value is a member of the array
  // specified by the third argument.

  var point_set_out = [];
  for (var ip = 0; ip < point_set.length; ip++) {
    if (xs.indexOf(point_set[ip][n]) != -1) {
      point_set_out.push(point_set[ip]);
    }
  }
  return point_set_out;
};