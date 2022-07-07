export default function array_object_index_of(myArray, searchTerm, property){
  // Joe on Stack Overflow 27/12/2014.
  // In
  // myArray Array mandatory
  // searchTerm Boolean, Number, or String mandatory
  // property String mandatory
  // Out Integer
  // In an array of objects, this function locates the index of the object
  // whose specifiable property is set to a specifiable value.
  // http://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array

  for(var i = 0, len = myArray.length; i < len; i++){
    if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}
