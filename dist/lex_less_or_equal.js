"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lex_less_or_equal;

// Projection.
function lex_less_or_equal(u, w, k) {
  // Tom Collins 30/06/2022.
  // In
  // u Array mandatory
  // v Array mandatory
  // v Array mandatory
  // k Integer optional
  // This function is useful when testing whether u is lexicographically less
  // than or equal to w.
  //
  // The function returns 1 if u is 'less than' v, where 'less than' is
  // the lexicographic ordering. It returns -1 if u is 'greater than' v,
  // and it returns 0 if u equals v.
  //
  // In general, for two vectors u and w, this function finds the first index i
  // such that u(i) is not equal to w(i). If u(i) is less than w(i), then u is
  // 'less than' w. If w(i) is less than u(i), then w is 'less than' u. The other
  // possible outcome is that u equals w.

  if (k == undefined) {
    k = u.length;
  }
  // Logical outcome.
  var tf = 0;
  // Dimension of vector.
  var s = 0; // Increment over u.
  while (s < k) {
    if (Math.abs(u[s] - w[s]) < .00002) {
      s++;
    } else if (u[s] > w[s]) {
      tf = -1;
      s = k;
    } else {
      tf = 1;
      s = k;
    }
  }
  return tf;
}