export default function index_point_set(point_set){
  // Tom Collins 24/11/2014.
  // In
  // point_set Array mandatory
  // Out Array
  // This function pushes index values to the last element of each point.

  var k = point_set[0].length;
  var n = point_set.length;
  var i = 0; // Increment over point_set.
  while (i < n){
    point_set[i][k] = i;
    i++;
  }
  return point_set;
}
