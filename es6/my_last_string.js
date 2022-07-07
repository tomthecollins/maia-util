export default function my_last_string(a_string){
  // Tom Collins 20/9/2015.
  // In
  // a_string String mandatory
  // Out String
  // This function returns the last element of a string as a string.

  if (a_string.length === 0){
    return "";
  }
  else {
    return a_string[a_string.length - 1];
  }
}
