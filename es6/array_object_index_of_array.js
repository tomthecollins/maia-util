import array_equals from './array_equals'

export default function array_object_index_of_array (myArray, searchArray, property){
  // Tom Collins 27/1/2015.
  // In
  // myArray Array mandatory
  // searchArray Array mandatory
  // property String mandatory
  // Out Integer
  // In an array of objects, this function locates the index of an array object
  // whose specifiable property is equal to a specifiable array.

  for(var i = 0, len = myArray.length; i < len; i++) {
    if (array_equals(myArray[i][property],searchArray)) return i;
  }
  return -1;
}
