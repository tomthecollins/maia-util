'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = count_rows;

var _copy_point_set = require('./copy_point_set');

var _copy_point_set2 = _interopRequireDefault(_copy_point_set);

var _sort_rows = require('./sort_rows');

var _sort_rows2 = _interopRequireDefault(_sort_rows);

var _array_equals = require('./array_equals');

var _array_equals2 = _interopRequireDefault(_array_equals);

var _array_approx_equals = require('./array_approx_equals');

var _array_approx_equals2 = _interopRequireDefault(_array_approx_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function counts rows of the input `point_set`, weighted, if desired, by
 * values in `wght_idx`.
 *
 * @author Tom Collins and Christian Coulon
 * @comment 7th November 2015
 * @param {PointSet} point_set - A point set
 * @param {number} [wght_idx] - The dimension of each point that should be used
 * to weight the count. If left undefined, each occurrence of a point will
 * increment the count of that point by 1.
 * @return {Object} [PointSet, number[]] An array whose first element is a
 * {@link PointSet} (unique and lexicographically ascending version of the
 * input), and whose second element is a (possibly weighted) count of those
 * points in the input.
 *
 * @example
 *     var ps = [[64, 2], [65, 1], [67, 1], [67, 1]];
 * var w = 1;
 * count_rows(ps, w)
 * →
 * [
 *   [
 *     [64, 2], [65, 1], [67, 1]
 *   ],
 *   [
 *     2, // One occurrence of [64, 2] in input point set, with weight 2.
 *     1, // One occurrence of [65, 1] in input point set, with weight 1.
 *     2 // Two occurrences of [67, 1] in input point set, each with weight 1.
 *   ]
 * ]
 */
function count_rows(point_set, wght_idx) {
  var approx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // No check on point_set credentials at present...
  if (wght_idx !== undefined && wght_idx < point_set[0].length) {
    // Make a copy of the point_set, where wght_idx values are in the final
    // dimension of each point.
    var arr = (0, _copy_point_set2.default)(point_set);
    var arr2 = [];
    for (var _i = 0; _i < arr.length; _i++) {
      var curr_rmv = point_set[_i][wght_idx];
      // console.log('curr_rmv:');
      // console.log(curr_rmv);
      arr[_i].splice(wght_idx, 1);
      // console.log('arr[i]:');
      // console.log(arr[i]);
      arr2.push(arr[_i].concat([curr_rmv]));
    }
    // Sort the rows of a copy of the dataset.
    var E = (0, _sort_rows2.default)(arr2);
    var F = E[0];
    // var g = E[1];
    // Create a new variable that will contain the unique rows of the dataset.
    var k = point_set[0].length - 1;
    var U = [];
    // Create a new variable that will contain the count of each unique row in
    // the original dataset.
    var v = [];
    U[0] = F[0].slice(0, k);
    v[0] = F[0][k];
    var i = 1; // Increment over F and g.
    var j = 1; // Increment over U and v.
    while (i < point_set.length) {
      if (approx) {
        if ((0, _array_approx_equals2.default)(F[i].slice(0, k), F[i - 1].slice(0, k))) {
          v[j - 1] = v[j - 1] + F[i][k];
        } else {
          U[j] = F[i].slice(0, k);
          v[j] = F[i][k];
          j++;
        }
      } else {
        if ((0, _array_equals2.default)(F[i].slice(0, k), F[i - 1].slice(0, k))) {
          v[j - 1] = v[j - 1] + F[i][k];
        } else {
          U[j] = F[i].slice(0, k);
          v[j] = F[i][k];
          j++;
        }
      }
      i++;
    }
  } else {
    // Sort the rows of a copy of the dataset.
    var E = (0, _sort_rows2.default)(point_set);
    var F = E[0];
    // var g = E[1];
    // Create a new variable that will contain the unique rows of the dataset.
    var k = point_set[0].length;
    var U = [];
    // Create a new variable that will contain the count of each unique row in
    // the original dataset.
    var v = [];
    U[0] = F[0];
    v[0] = 1;
    var i = 1; // Increment over F and g.
    var j = 1; // Increment over U and v.
    while (i < point_set.length) {
      if (approx) {
        if ((0, _array_approx_equals2.default)(F[i], F[i - 1])) {
          v[j - 1]++;
        } else {
          U[j] = F[i];
          v[j] = 1;
          j++;
        }
      } else {
        if ((0, _array_equals2.default)(F[i], F[i - 1])) {
          v[j - 1]++;
        } else {
          U[j] = F[i];
          v[j] = 1;
          j++;
        }
      }
      i++;
    }
  }
  return [U.slice(0, j), v.slice(0, j)];
}