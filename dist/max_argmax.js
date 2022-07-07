"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max_argmax;
function max_argmax(arr) {
  // Tom Collins 21/10/2014.
  // In
  // arr Array mandatory
  // Out Array
  // Returns the maximum element in an array and its index (argument).

  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return [max, maxIndex];

  // CDC said the following is the same, but it does not retain the index of
  // the maximum element:
  // return arr.reduce(function(a, b){ return a > b?a:b; }, arr[0]);
}