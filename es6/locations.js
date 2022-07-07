
// String operations.
export default function locations(substring, string){
  // Tom Collins 18/2/2016.
  // In
  // substring String mandatory
  // string String mandatory
  // This function is from vcsjones on stackoverflow, for finding the indices
  // of multiple occurrences of a substring in a string. I thought it would be
  // possible to call str.search(e) where e is a regexp with global modifier,
  // but this did not seem to work.
  // http://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string

  var a=[],i=-1;
  while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
  return a;
}
