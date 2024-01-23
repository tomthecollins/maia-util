"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = points_belonging_to_interval;
function points_belonging_to_interval(point_set, a, b) {
  var ontimeIdx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var durIdx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;

  // Tom Collins 25/10/2011.
  // In
  // point_set Array mandatory
  // a Number mandatory
  // b Number mandatory
  // Out Array
  // For a time interval [a, b), this function will return points from the
  // input point_set that sound during the time interval.

  var L = point_set.length;
  var segment = new Array(L);
  var i = 0;
  var j = 0;
  while (i < L) {
    if (point_set[i][ontimeIdx] < b && point_set[i][ontimeIdx] + point_set[i][durIdx] > a) {
      segment[j] = point_set[i];
      j++;
    }
    if (point_set[i][ontimeIdx] >= b) {
      i = L;
    }
    i++;
  }
  return segment.slice(0, j);
}