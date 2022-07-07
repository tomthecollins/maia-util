
// Projection.
export default function lex_less_or_equal_triple(dj, v, di, k){
  // Tom Collins 16/12/2014.
  // In
  // dj Array mandatory
  // v Array mandatory
  // di Array mandatory
  // k Integer optional
  // This function is useful when testing whether dj + v is lexicographically
  // less than or equal to di. It is faster to check each element of dj + v and
  // di in turn, rather than calculate dj + v first.
  //
  // The function returns 1 if dj + v is 'less than' di, where 'less than' is
  // the lexicographic ordering. It returns -1 if dj + v is 'greater than' di,
  // and it returns 0 if dj + v equals di.
  //
  // In general, for two vectors u and w, this function finds the first index i
  // such that u(i) is not equal to w(i). If u(i) is less than w(i), then u is
  // 'less than' w. If w(i) is less than u(i), then w is 'less than' u. The other
  // possible outcome is that u equals w.

  if (k == undefined){
    k = dj.length;
  }
  // Logical outcome.
  var tf = 0;
  // Dimension of vector.
  var s = 0; // Increment over dj and v.
  var e; // Each element of E = dj + v;
  while (s < k){
    e = dj[s] + v[s];
    if (e > di[s]){
      tf = -1;
      s = k;
    }
    else{
      if (e == di[s]){
        s++;
      }
      else{
        tf = 1;
        s = k;
      }
    }
  }
  return tf;
}
