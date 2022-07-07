'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skewness;

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function calculates the sample skewness of an input array.
 *
 * @author Tom Collins
 * @comment 20th April 2020
 * @param {number[]} arr - An array.
 * @return {number} The calculated sample skewness.
 *
 * @example
 *     skewness([7.7, 10.5, 10.0, 13.3, 14.5, 19.1]);
 * →
 * 0.5251819
 */
function skewness(x) {
  var xbar = (0, _mean2.default)(x);
  var s3 = 0;
  x.forEach(function (val) {
    s3 += Math.pow(val - xbar, 3);
  });
  var s2 = 0;
  x.forEach(function (val) {
    s2 += Math.pow(val - xbar, 2);
  });
  if (s2 > 0) {
    return s3 / x.length / Math.pow(s2 / x.length, 3 / 2);
  }
}