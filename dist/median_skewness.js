'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = median_skewness;

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

var _median = require('./median');

var _median2 = _interopRequireDefault(_median);

var _std = require('./std');

var _std2 = _interopRequireDefault(_std);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function calculates the median skewness (Pearson's second skewness
 * coefficient) of a sample contained in an input array.
 *
 * @author Tom Collins
 * @comment 3th September 2020
 * @param {number[]} arr - An array.
 * @return {number} The calculated median skewness.
 *
 * @example
 *     median_skewness([7.7, 10.5, 10.0, 13.3, 14.5, 19.1]);
 * →
 * 0.5019952
 */
function median_skewness(x) {
  var unbiasedVar = Math.pow((0, _std2.default)(x), 2);
  var biasedVar = unbiasedVar * (x.length - 1) / x.length;
  return 3 * ((0, _mean2.default)(x) - (0, _median2.default)(x)) / Math.sqrt(biasedVar);
}