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
  return (0, _factorial2.default)(n) / (0, _factorial2.default)(k) / (0, _factorial2.default)(n - k >= 0 ? n - k : NaN);
}