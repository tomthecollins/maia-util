'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort_rows;

var _copy_point_set = require('./copy_point_set');

var _copy_point_set2 = _interopRequireDefault(_copy_point_set);

var _index_point_set = require('./index_point_set');

var _index_point_set2 = _interopRequireDefault(_index_point_set);

var _lex_more = require('./lex_more');

var _lex_more2 = _interopRequireDefault(_lex_more);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sort_rows(point_set) {
  // Tom Collins 24/11/2014.
  // In
  // point_set Array mandatory
  // Out Array
  // The only argument to this function is an array consisting of numeric
  // arrays of uniform dimension (what I call a point set). This function
  // returns the elements in lexicographic order as first argument. As second
  // argument are the indices of each element from the input array.

  // Create an independent copy of the dataset.
  var E = (0, _copy_point_set2.default)(point_set);
  // Index the copied dataset.
  E = (0, _index_point_set2.default)(E);
  // Sort the indexed and copied dataset.
  E.sort(_lex_more2.default);
  // Create a new variable that will contain just the dataset.
  var k = point_set[0].length;
  var n = point_set.length;
  var F = new Array(n);
  // Create a new variable that will contain just the index.
  var g = new Array(n);
  var i = 0; // Increment over E, F, and g.
  while (i < n) {
    F[i] = E[i].slice(0, k);
    g[i] = E[i][k];
    i++;
  }
  return [F, g];
}