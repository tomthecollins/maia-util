'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = std;

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function calculates the sample standard deviation of an input array.
 *
 * @author Tom Collins
 * @comment 5th April 2020
 * @param {number|booelan[]} arr - An array.
 * @param {string|number|booelan[]} [cdf] - An array.
 * @return {(string|number|booelan)} An element from `arr`.
 *
 * @example
 *     std([727.7, 1086.5, 1091.0, 1361.3, 1490.5, 1956.1]);
 * →
 * 420.96
 */
function std(x) {
  var xbar = (0, _mean2.default)(x);
  var ss = 0;
  x.forEach(function (val) {
    ss += Math.pow(val - xbar, 2);
  });
  return Math.sqrt(ss / (x.length - 1));
}