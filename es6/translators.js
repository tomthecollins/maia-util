import intersection from './intersection'
import intersection_hash from './intersection_hash'

// Example
// const D = [[5, 6], [5, 7], [6, 7], [7, 8], [8, 5], [8, 7], [8, 9], [9, 7],
//   [9, 8], [10, 8], [12, 6], [12, 8], [12, 10], [13, 5], [13, 9], [14, 7],
//   [15, 5], [15, 7], [15, 10], [16, 6]]
// const P = [[10, 8], [12, 8], [12, 10], [13, 9]]
// const ans = translators(P, D)
// console.log("ans:", ans)

export default function translators(P, D, hash = true){
  // Tom Collins 7/12/2024.
  // In
  // P Array mandatory
  // D Array mandatory
  // Out Array
  // This function calculates the translators of a point set P in the (larger)
  // point set D (containing n k-dimensional points). It is assumed that both
  // point sets are non-empty and in lexicograhic order, and that each element
  // of P is an element of D.

  // I think this could be made even quicker if we hashed D, because then the
  // intersections in lines 42 and 54 would run faster.

  if (P.length === 1){
    return dmv(D, P[0])
  }

  else if (P.length === D.length){
    // Return the zero vector.
    return P[0].map(function(){
      return 0
    })
  }

  // (P.length > 1)
  else {
    // Take p1 and calculate D - p_0.
    let E = dmv(D, P[0])
    // console.log("E from dmv(D, P[0]):", E)

    // Hash D.
    let Dh
    if (hash){
      Dh = {}
      D.map(function(d, idx){
        const hash = d.map(function(val){
          // Calculate difference rounded to 5 d.p. and convert to string.
          return (Math.round(100000*(val))/100000).toString()
        }).toString()
        if (Dh[hash] === undefined){
          Dh[hash] = idx
        }
        else {
          console.log("Error: non-unique entry in D!")
          return
        }
      })
      // console.log("Dh:", Dh)
    }

    let E_and_indices
    if (hash){
      E_and_indices = intersection_hash(dpv(E, P[1]), Dh, true)
    }
    else {
      E_and_indices = intersection(dpv(E, P[1]), D, 0)
    }
    // console.log("E_and_indices for p_1:", E_and_indices)

    let i = 1
    while (i < P.length - 1 && E_and_indices[1]){
      // console.log("i:", i)
      // Candidates that remain:
      E = E_and_indices[1].map(function(idx){
        return E[idx]
      })
      // console.log("candidates E after p_" + i + ":", E)

      if (hash){
        E_and_indices = intersection_hash(dpv(E, P[i + 1]), Dh, true)
      }
      else {
        E_and_indices = intersection(dpv(E, P[i + 1]), D, 0)
      }
      // console.log("E_and_indices for p_" + (i + 1) + ":", E_and_indices)

      i=i+1
    }
    return E
  }

}

// D minus a vector
function dmv(_D, _v){
  return _D.map(function(d){
    return d.map(function(di, i){
      return di - _v[i]
    })
  })
}

// D plus a vector
function dpv(_D, _v){
  return _D.map(function(d){
    return d.map(function(di, i){
      return di + _v[i]
    })
  })
}
