"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = entropy;
/**
 * This function calculates the information (Shannon) entropy in bits.
 *
 * @author Tom Collins
 * @comment 20th September 2024
 * @param {number[]} arr - An array.
 * @return {number} The calculated entropy.
 *
 * @example
 *     entropy([0.5, 0.5])
 * →
 * 1
 *
 *     entropy([0.25, 0.25, 0.25, 0.25])
 * →
 * 2
 *
 *     entropy([0.9, 0.05, 0.05])
 * →
 * 0.57
 *
 *     entropy([0.25, 0.35, 0.15, 0.25])
 * →
 * 1.94
 *
 *     entropy([1])
 * →
 * 0
 */
function entropy(x) {
  return -x.reduce(function (a, val) {
    return a + val * Math.log2(val);
  }, 0);
}