export default function points_belonging_to_interval(point_set, a, b){
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
    if (point_set[i][0] < b && point_set[i][0] + point_set[i][3] > a) {
      segment[j] = point_set[i];
      j++;
    }
    if (point_set[i][0] >= b) {
      i = L;
    }
    i++;
  }
  return segment.slice(0, j);
}
