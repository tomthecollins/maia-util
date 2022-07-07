import array_equals from './array_equals'
export default function index_item_1st_occurs(arr,a){
  // Tom Collins 1/2/2015.
  // In
  // a Array, Boolean, Number, or String mandatory
  // Out Integer
  // Returns the index at which the given argument a firsts occur. It is more
  // robust than indexOf functionality because it will match arguments
  // consisting of arrays, strings, and booleans as well as numbers. It will
  // not match arbitrary objects, however (see second example in testing).

  var typeofa = typeof a;
  var instanceofarraya = a instanceof Array;
  var idx = -1;
  var i = 0;
  while (i < arr.length)
  {
    if (typeof arr[i] == typeofa){
      if(instanceofarraya && arr[i] instanceof Array){
        if (array_equals(arr[i],a)){
          idx = i;
          i = arr.length - 1;
        }
      }
      else{
        if (arr[i] == a){
          idx = i;
          i = arr.length - 1;
        }
      }
    }
    i=i+1;
  }
  return idx;
}
