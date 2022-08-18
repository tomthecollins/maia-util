export default function min_argmin (arr){
  // Tom Collins 21/10/2014.
  // In
  // arr Array mandatory
  // Out Array
  // Returns the minimum element in an array and its index (argument).

  var min = arr[0];
  var minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      minIndex = i;
      min = arr[i];
    }
  }
  return [min, minIndex];

  // CDC said the following is the same, but it does not retain the index of
  // the minimum element:
  // return arr.reduce(function(a, b){ return a < b?a:b; }, arr[0]);
}
