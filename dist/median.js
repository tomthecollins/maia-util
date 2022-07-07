"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = median;
function median(arr) {
  // Tom Collins 28/8/2020.
  // In
  // arr Array mandatory
  // Out Number
  // This function returns the median of an input numeric array. No assumption
  // of sortedness. Tests input is all of type number, returning undefined if
  // this tests fails.

  if (arr.length === 0) {
    return;
  }
  var testAllNum = arr.every(function (x) {
    return typeof x === "number";
  });
  if (!testAllNum) {
    console.log("arr contains the wrong data types or is a mix of data types. " + "Returning undefined.");
    return;
  }
  var sortedArr = arr.sort(function (x, y) {
    return x - y;
  });
  var n = sortedArr.length;
  if (n % 2 == 0) {
    return (sortedArr[n / 2 - 1] + sortedArr[n / 2]) / 2;
  } else {
    return sortedArr[(n - 1) / 2];
  }
}