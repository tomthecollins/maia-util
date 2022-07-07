import copy_point_set from './copy_point_set'
import index_point_set from './index_point_set'
import lex_more from './lex_more'

export default function sort_rows(point_set){
  // Tom Collins 24/11/2014.
  // In
  // point_set Array mandatory
  // Out Array
  // The only argument to this function is an array consisting of numeric
  // arrays of uniform dimension (what I call a point set). This function
  // returns the elements in lexicographic order as first argument. As second
  // argument are the indices of each element from the input array.

  // Create an independent copy of the dataset.
  var E = copy_point_set(point_set);
  // Index the copied dataset.
  E = index_point_set(E);
  // Sort the indexed and copied dataset.
  E.sort(lex_more);
  // Create a new variable that will contain just the dataset.
  var k = point_set[0].length;
  var n = point_set.length;
  var F = new Array(n);
  // Create a new variable that will contain just the index.
  var g = new Array(n);
  var i = 0; // Increment over E, F, and g.
  while (i < n){
    F[i] = E[i].slice(0, k);
    g[i] = E[i][k];
    i++;
  }
  return [F, g];
}
