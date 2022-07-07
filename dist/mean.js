"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mean;
function mean(arr) {
  // Christian Coulon and Tom Collins 17/10/2014.
  // In
  // arr Array mandatory
  // Out Number
  // This function returns the mean of an input numeric array.

  if (!arr.length) {
    return 0;
  } else {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
}