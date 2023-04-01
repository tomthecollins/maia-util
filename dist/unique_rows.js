'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique_rows;

var _array_equals = require('./array_equals');

var _array_equals2 = _interopRequireDefault(_array_equals);

var _array_approx_equals = require('./array_approx_equals');

var _array_approx_equals2 = _interopRequireDefault(_array_approx_equals);

var _sort_rows = require('./sort_rows');

var _sort_rows2 = _interopRequireDefault(_sort_rows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unique_rows(point_set) {
  var approx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // Tom Collins 16/12/2014.
  // In
  // point_set Array mandatory
  // Out Array
  // The only argument to this function is an array consisting of numeric
  // arrays of uniform dimension (what I call a point set). This function
  // returns the unique elements in lexicographic order as first argument. As
  // second argument are the indices of each element from the input array.

  // Catch empty arrays.
  var n = point_set.length;
  if (n == 0) {
    return [[], []];
  }

  // Sort the rows of a copy of the dataset.
  var E = (0, _sort_rows2.default)(point_set);
  var F = E[0];
  var g = E[1];
  // Create a new variable that will contain the unique rows of the dataset.
  var k = point_set[0].length;
  var U = new Array(n);
  // Create a new variable that will contain the indices of each unique row in
  // the original dataset.
  var v = new Array(n);
  U[0] = F[0];
  v[0] = [g[0]];
  var i = 1; // Increment over F and g.
  var j = 1; // Increment over U and v.
  if (approx) {
    while (i < n) {
      if ((0, _array_approx_equals2.default)(F[i], F[i - 1])) {
        v[j - 1].push(g[i]);
      } else {
        U[j] = F[i];
        v[j] = [g[i]];
        j++;
      }
      i++;
    }
  } else {
    while (i < n) {
      if ((0, _array_equals2.default)(F[i], F[i - 1])) {
        v[j - 1].push(g[i]);
      } else {
        U[j] = F[i];
        v[j] = [g[i]];
        j++;
      }
      i++;
    }
  }
  return [U.slice(0, j), v.slice(0, j)];
}