export default function subtract_two_arrays(a, b){
  // Tom Collins 27/12/2014.
  // In
  // a Array mandatory
  // b Array mandatory
  // Out Array
  // Subtracts the second array from the first, element-by-element. It is
  // assumed that elements of array arguments are numbers, and the list
  // arguments are of the same length.

  var out_array = [];
  for (let i = 0; i < Math.min(a.length, b.length); i++){
    out_array.push(a[i] - b[i]);
  }
  return out_array;
};
