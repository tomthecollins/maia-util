"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = string_separated_string2array;
function string_separated_string2array(substring, a_string) {
  // Tom Collins 9/8/2015.
  // In
  // substring String mandatory
  // a_string String mandatory
  // Out Array
  // This function converts a string (second argument) interspersed with
  // occurrences of a substring (first argument) into an array, where each
  // element is a string preceding or proceeding the substring.

  var an_array = a_string.split(substring);
  for (var i = 0; i < an_array.length; i++) {
    an_array[i] = an_array[i].trim();
  }
  return an_array;
}