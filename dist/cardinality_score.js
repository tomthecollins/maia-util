'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardinality_score;

var _subtract_two_arrays = require('./subtract_two_arrays');

var _subtract_two_arrays2 = _interopRequireDefault(_subtract_two_arrays);

var _count_rows = require('./count_rows');

var _count_rows2 = _interopRequireDefault(_count_rows);

var _max_argmax = require('./max_argmax');

var _max_argmax2 = _interopRequireDefault(_max_argmax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import intersect from './intersect'

/**
 * This function calculates the difference between each pair of points in P and Q, sorts
 % by frequency of occurrence, and then returns the frequency of the most
 % frequently occurring difference vector, divided by the maximum of the
 % number of points in P and Q. If P is a translation of Q, then the
 % cardinality score is 1; if no two pairs of P points and Q points are
 % translations, then the cardinality score is zero; otherwise it is
 % somewhere between the two.
 *
 * @author Tom Collins
 * @comment 4th February 2020
 * @param {PointSet} P - A point set
 * @param {PointSet} Q - A point set
 * @return {number} Output decimal and array
 *
 * @example
 *     cardinality_score([[1, 1], [1, 3], [1, 4], [2, 2], [3, 1], [4, 1], [4, 4]], [[3, 4], [3, 6], [3, 7], [4, 2], [5, 4], [5, 5], [6, 7], [7, 1]])
 * →
 * [0.625, [2, 3]]
 */
function cardinality_score(P, Q) {
  var allowTrans = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var approx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var m = P.length;
  var n = Q.length;
  var numerator = void 0,
      maxTransVec = void 0;
  if (allowTrans) {
    // Calculate the difference array, but leave it as a vector.
    var k = P[0].length;
    var bigN = m * n;
    var bigV = new Array(bigN);
    var bigL = 0; // Increment to populate V.
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        bigV[bigL] = (0, _subtract_two_arrays2.default)(Q[j], P[i]);
        bigL++;
      }
    }
    // console.log("bigV:", bigV)
    var bigV2 = (0, _count_rows2.default)(bigV, undefined, approx);
    // console.log("bigV2:", bigV2)
    var ma = (0, _max_argmax2.default)(bigV2[1]);
    // console.log("ma:", ma)
    numerator = ma[0];
    maxTransVec = bigV2[0][ma[1]];
  } else {
    console.log("YOU NEED TO WRITE THE INTERSECT FUNCTION!");
    return;
    numerator = intersect(P, Q).length;
    maxTransVec = [];
  }
  // console.log("numerator:", numerator)
  // console.log("maxTransVec:", maxTransVec)
  var sCard = numerator / Math.max(m, n);

  return [sCard, maxTransVec];
}