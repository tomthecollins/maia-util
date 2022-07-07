"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mod;
function mod(x, n) {
  // Tom Collins 28/8/2020.
  // In
  // x Number mandatory
  // n Positive integer mandatory
  // Out Number
  // This function returns x mod n. JavaScript's % operator returns remainder,
  // which can be negative. This function always returns non-negative values.
  // No checks are made on n being a positive integer.

  return x - n * Math.floor(x / n);
}