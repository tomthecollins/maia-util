// Array operations.
export default function append_array(an_array){
  // Tom Collins 23/12/2014.
  // In
  // an_array Array mandatory
  // Out Array
  // This function removes one level of brackets from an array.

  return an_array.reduce(function(a, b){
    return a.concat(b);
  }, []);

  // Old version.
  // var out_array = [];
  // for (let ia = 0; ia < an_array.length; ia++){
  //   for (let ib = 0; ib < an_array[ia].length; ib++){
  //     out_array.push(an_array[ia][ib]);
  //   }
  // }
};
