"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copy_array_object;
function copy_array_object(arr) {
  // Tom Collins 21/2/2015.
  // In
  // arr Array mandatory
  // Out Array
  // This function returns an independent copy of an array object.

  return JSON.parse(JSON.stringify(arr));
}