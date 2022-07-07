"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get_random_int;
function get_random_int(min, max) {
  // Mozilla 11/2015.
  // In
  // min Integer mandatory
  // max Integer mandatory
  // Out Number
  // Returns a random integer between min (included) and max (excluded).
  // Using Math.round() will give you a non-uniform distribution!
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  return Math.floor(Math.random() * (max - min)) + min;
}