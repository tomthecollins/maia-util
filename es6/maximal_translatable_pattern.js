import intersection from './intersection'

export default function maximal_translatable_pattern(v, D, k, n){
  // Tom Collins 16/12/2014.
  // In
  // v Array mandatory
  // D Array mandatory
  // k Integer mandatory
  // n Integer mandatory
  // Out Array
  // This function calculates the maximal translatable pattern (MTP, Meredith
  // Lemstrom, & Wiggins, 2002) of the vector v in the point set D (containing
  // n k-dimensional points). The MTP P and indices I of datapoints forming the
  // MTP are returned. It is assumed that the point set D is in lexicograhic
  // order.

  const Dmv = D.map(function(d){
    return d.map(function(di, i){
      return di - v[i]
    })
  })
  return intersection(D, Dmv, 0)

  // Old version from 2014. Quicker to do the intersection with the assumption
  // of lexicographic order.
  // var P = new Array(n);
  // var I = new Array(n);
  // var i = 0; // Increment over D.
  // var j = 0; // Increment over E (= to D + v).
  // var L = 0; // Increment over P.
  // var tf; // Outcome of call to function lexLessOrEqualTriple.
  // while (i < n){
  //   tf = lex_less_or_equal_triple(D[j], v, D[i], k);
  //   if (tf == -1){
  //     i++;
  //   }
  //   else{
  //     if (tf == 0){
  //       P[L] = D[j];
  //       I[L] = j;
  //       i++;
  //       j++;
  //       L++;
  //     }
  //     else{
  //       j++;
  //     }
  //   }
  // }
  // return [P.slice(0, L), I.slice(0, L)];
}
