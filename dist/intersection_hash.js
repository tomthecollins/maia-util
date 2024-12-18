"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersection_hash;
/**
 * This function returns the intersection of two multidimensional numeric,
 * arrays, assuming both are already in increasing lexicographic order to
 * achieve O(n) computational complexity.
 *
 * @author Tom Collins
 * @comment 30th June 2022
 * @param {number[]} arr - An array.
 * @param {number[]} obj - JavaScript object representing a hash of a large
 * array.
 * @param {(boolean|number)} index - Indicates whether to record indices of arr
 * as belonging to the intersection. Takes value true if recording indices from
 * arr and false otherwise.
 * @return {number[]} An array.
 *
 * @example
 *     intersection([[1, 4], [2, -2]], [[-2, 3], [2, -2], [4, 1]])
 * →
 * [[2, -2]]
 */
function intersection_hash(arr, obj) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var ans = [];
  var indices = void 0;
  if (index) {
    indices = [];
  }
  var i = 0; // Counter for arr.
  while (i < arr.length) {
    var hash = arr[i].map(function (val) {
      // Calculate value rounded to 5 d.p. and convert to string.
      return (Math.round(100000 * val) / 100000).toString();
    }).toString();
    if (obj[hash]) {
      ans.push(arr[i]);
      // Handle recording of indices.
      if (index) {
        indices.push(i);
      }
    }
    i++;
  }
  if (index) {
    return [ans, indices];
  } else {
    return ans;
  }
}