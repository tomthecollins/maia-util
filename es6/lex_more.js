export default function lex_more(u, v, k){
  // Tom Collins 24/11/2014.
  // In
  // u Array mandatory
  // v Array mandatory
  // k Integer optional
  // This function returns 1 if u is more than v, where more than is the
  // lexicographic ordering. It returns -1 otherwise.

  // In general, for two vectors u and v, this function finds the first index
  // i such that u(i) is not equal to v(i). If u(i) is more than v(i), then u
  // is more than v. If v(i) is more than u(i), then v is more than u. In
  // the event that u equals v, u is not more than v.

  if (typeof k === 'undefined') {
    k = u.length;
  }
  // Logical outcome.
  var tf = -1;
  var i = 0; // Increment over u, v.
  while (i < k){
    if (u[i] == v[i]){
      i++;
    }
    else{
      if (u[i] > v[i]){
        tf = 1;
        i = k + 1;
      }
      else{
        i = k + 1;
      }
    }
  }
  return tf;
}
