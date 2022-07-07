export default function append_array_of_arrays(an_array){
  // Tom Collins 9/8/2015.
  // In
  // an_array Array mandatory
  // Out Array
  // In an array of arrays, this function identifies elements that are arrays
  // of arrays, as opposed to arrays whose first element is a string, and
  // removes one structural level from the former type of arrays.

  var out_array = [];
  for (let ia = 0; ia < an_array.length; ia++){
    if (typeof an_array[ia][0] == "string") {
      out_array.push(an_array[ia]);
    }
    else{
      for (let ib = 0; ib < an_array[ia].length; ib++){
        out_array.push(an_array[ia][ib]);
      }
    }

  }
  return out_array;

};
