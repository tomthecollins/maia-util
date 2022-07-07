"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copy_point_set;
// Point-set operations.
function copy_point_set(point_set) {
  // Tom Collins 24/11/2014.
  // In
  // point_set Array mandatory
  // Out Array
  // This function returns an independent copy of a point set.

  var E = [];
  point_set.map(function (x) {
    E.push(x.slice());
  });
  return E;

  // Old version.
  // var n = point_set.length;
  // var E = new Array(n);
  // var i = 0; // Increment over D and E.
  // while (i < n){
  //   E[i] = point_set[i].slice();
  //   i++;
  // }
  // return E;
}