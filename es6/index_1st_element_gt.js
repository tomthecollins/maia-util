// Interpolation.
export default function index_1st_element_gt(item, an_array){
  // Tom Collins 27/12/2014.
  // In
  // item Number mandatory
  // an_array Array mandatory
  // Out Integer
  // This function takes two arguments: a real number x and an array L of real
  // numbers. It returns the index of the first element of L that is greater
  // than x.

  var idx = 0;
  var jdx = undefined;
  while (idx < an_array.length){
    if (an_array[idx] > item){
      jdx = idx;
      idx = an_array.length;
    }
    idx++;
  }
  return jdx;
};
