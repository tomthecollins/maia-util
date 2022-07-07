"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = corr;

var _mean = require("./mean");

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function calculates the Pearson product-moment correlation coefficient
 * between the input arrays `x` and `y`. It checks that the arrays are of the
 * same length, but does not check that they each consist of numbers, nor for
 * zero divisors (output `NaN` in both cases).
 *
 * @author Tom Collins
 * @comment 8/11/2015
 * @param {number[]} x - An array
 * @param {number[]} y - An array
 * @return {number} in the range [-1, 1]
 *
 * @example
 *     const x = [6, -4.2, 0]
 * const y = [0, 0.5, 1]
 * var dimArr = [0, 2];
 * corr(x, y);
 * →
 * 0.4274
 */

function corr(x, y) {
  var n = x.length;
  if (n !== y.length) {
    throw "Error in call to corr: input arrays must be of the same length.";
  } else {
    var x_bar = (0, _mean2.default)(x);
    var y_bar = (0, _mean2.default)(y);
    var x2 = 0;
    var y2 = 0;
    var xy = 0;
    for (var i = 0; i < x.length; i++) {
      x2 += Math.pow(x[i], 2);
      y2 += Math.pow(y[i], 2);
      xy += x[i] * y[i];
    }
    var r = (xy - n * x_bar * y_bar) / (Math.sqrt(x2 - n * Math.pow(x_bar, 2)) * Math.sqrt(y2 - n * Math.pow(y_bar, 2)));
    return r;
  }
}