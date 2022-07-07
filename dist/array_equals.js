"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = array_equals;
function array_equals(arr, arr2) {
  // Joe on Stack Overflow 27/12/2014.
  // In
  // array Array mandatory
  // Out Boolean
  // Returns true if two arrays are equal, and false otherwise.
  // http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript

  // If the other array is a falsy value, return.
  if (!arr2) return false;

  // Compare lengths.
  if (arr.length != arr2.length) return false;

  for (var i = 0, l = arr.length; i < l; i++) {
    // Check if we have nested arr2s.
    if (arr[i] instanceof Array && arr2[i] instanceof Array) {
      // Recurse into the nested arr2s.
      if (!array_equals(arr[i], arr2[i])) return false;
    } else if (arr[i] != arr2[i]) {
      // Warning - two different object instances will never be equal:
      // {x:20} != {x:20}.
      return false;
    }
  }
  return true;
}