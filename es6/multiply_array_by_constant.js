export default function multiply_array_by_constant(an_array, a_constant){
  // Tom Collins 27/12/2014.
  // In
  // an_array Array mandatory
  // a_constant Number mandatory
  // Out Array
  // Two arguments are supplied to this function: an array and a constant. An
  // array is returned, containing the result of multiplying each element of
  // the input array by the constant.

  return an_array.map(function(a){ return a*a_constant; });

  // Old version.
  // var out_array = [];
  // for (let i = 0; i < an_array.length; i++){
  //   out_array.push(a_constant*an_array[i]);
  // }
  // return out_array;
}
