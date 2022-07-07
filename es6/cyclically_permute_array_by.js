import copy_array_object from './copy_array_object'

export default function cyclically_permute_array_by(arr, m){
  // Tom Collins 6/11/2015.
  // In
  // arr Array mandatory
  // m Non-negative integer mandatory
  // Out Array
  // This function moves the ith element of an array (counting from zero) to
  // the zeroth element in the output array, where i is the second argument.
  // The (i - 1)th element is moved to the last element in the output array,
  // the (i - 2)th element is moved to the penultimate element in the output
  // array, etc.

  m = m % arr.length;
  var arr2 = copy_array_object(arr);
  var arr3 = arr2.slice(0, m);
  var arr4 = arr2.slice(m).concat(arr3);
  return arr4;
}
