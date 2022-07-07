import array_equals from './array_equals'
import sort_rows from './sort_rows'

export default function unique_rows(point_set){
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
  if (n == 0){
    return [[], []];
  }

  // Sort the rows of a copy of the dataset.
  var E = sort_rows(point_set);
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
  while (i < n){
    if (array_equals(F[i],F[i - 1])){
      v[j - 1].push(g[i]);
    }
    else{
      U[j] = F[i];
      v[j] = [g[i]];
      j++;
    }
    i++;
  }
  return [U.slice(0, j), v.slice(0, j)];
}
