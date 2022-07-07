"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get_unique;
function get_unique(arr) {
  // Tom Collins 24/11/2014.
  // In
  // arr Array mandatory
  // Out Array
  // This function returns unique elements from the input array. It will not
  // handle nested arrays properly (see unique_rows).

  var a = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (a.indexOf(arr[i]) === -1) {
      a.push(arr[i]);
    }
  }
  return a;
}