'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = binomial_coefficient;

var _factorial = require('./factorial');

var _factorial2 = _interopRequireDefault(_factorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function calculates the factorial of an input number, e.g.,
 * x * (x - 1) * (x - 2) * ... * 2 * 1.
 *
 * @author Tom Collins
 * @comment 30th March 2023
 * @param {number} x - An integer.
 * @return {number} The calculated factorial.
 *
 * @example
 *     factorial(4)
 * →
 * 24
 */
function binomial_coefficient(n, k) {
  if (n - k < 0) {
    return NaN;
  }
  var ans = 1;
  for (var i = 1; i <= Math.min(k, n - k); i++) {
    ans *= (n + 1 - i) / i;
  }
  return ans;
}

// This version clearly more closely related to the formula, but inefficient/
// impossible to calculate factorial(n) for large n.
// export default function binomial_coefficient(n, k){
//   return factorial(n)/factorial(k)/factorial(n - k >= 0 ? n - k : NaN)
// }