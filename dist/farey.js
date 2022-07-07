'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = farey;

var _get_unique = require('./get_unique');

var _get_unique2 = _interopRequireDefault(_get_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function returns the Farey sequence of order *n*.
 *
 * @author Tom Collins
 * @comment 21st January 2018
 * @param {number} n - Order of the Farey sequence
 * @return {number[]} Farey sequence, deduplicated and in ascending order
 *
 * @example
 *     farey(6);
 * →
 * [0, 0.16667, 0.25, 0.33333, 0.5, 0.66667, 0.75, 0.83333, 1]
 */
function farey(n) {
  var out_arr = [];
  for (var m = 2; m <= n; m++) {
    var fracs = [];
    for (var i = 1; i < m; i++) {
      // Round to 5 d.p. and push to fracs.
      fracs.push(Math.round(100000 * i / m) / 100000);
    }
    out_arr = out_arr.concat(fracs);
  }
  // Sort and get unique elements.
  out_arr = (0, _get_unique2.default)(out_arr.sort(function (a, b) {
    return a - b;
  }));
  // Stick 0 at the front and 1 at the end.
  out_arr.unshift(0);
  out_arr.push(1);
  return out_arr;
};