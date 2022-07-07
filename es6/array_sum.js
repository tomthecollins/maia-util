export default function array_sum(an_array){
  // Tom Collins 14/3/2015
  // In
  // an_array Array mandatory
  // Out Number
  // Returns the sum of elements of an array.

  return an_array.reduce(function(a, b){
    return a + b;
  }, 0);

  // Old version.
  // var count = 0;
  // for(var i = 0, n = an_array.length; i < n; i++){
  //  count += an_array[i];
  // }
  // return count;
}
