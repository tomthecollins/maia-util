import subtract_two_arrays from './subtract_two_arrays'
import count_rows from './count_rows'
import max_argmax from './max_argmax'
// import intersect from './intersect'

/**
 * This function calculates the difference between each pair of points in P and Q, sorts
 % by frequency of occurrence, and then returns the frequency of the most
 % frequently occurring difference vector, divided by the maximum of the
 % number of points in P and Q. If P is a translation of Q, then the
 % cardinality score is 1; if no two pairs of P points and Q points are
 % translations, then the cardinality score is zero; otherwise it is
 % somewhere between the two.
 *
 * @author Tom Collins
 * @comment 4th February 2020
 * @param {PointSet} P - A point set
 * @param {PointSet} Q - A point set
 * @return {number} Output decimal and array
 *
 * @example
 *     cardinality_score([[1, 1], [1, 3], [1, 4], [2, 2], [3, 1], [4, 1], [4, 4]], [[3, 4], [3, 6], [3, 7], [4, 2], [5, 4], [5, 5], [6, 7], [7, 1]])
 * →
 * [0.625, [2, 3]]
 */
export default function cardinality_score(P, Q, allowTrans = true, approx = true){
  const m = P.length
  const n = Q.length
  let numerator, maxTransVec
  if (allowTrans){
    // Calculate the difference array, but leave it as a vector.
    const k = P[0].length
    const bigN = m*n
    let bigV = new Array(bigN)
    let bigL = 0 // Increment to populate V.
    for (let i = 0; i < m; i++){
      for (let j = 0; j < n; j++){
        bigV[bigL] = subtract_two_arrays(Q[j], P[i])
        bigL++
      }
    }
    // console.log("bigV:", bigV)
    const bigV2 = count_rows(bigV, undefined, approx)
    // console.log("bigV2:", bigV2)
    const ma = max_argmax(bigV2[1])
    // console.log("ma:", ma)
    numerator = ma[0]
    maxTransVec = bigV2[0][ma[1]]
  }
  else {
    console.log("YOU NEED TO WRITE THE INTERSECT FUNCTION!")
    return
    numerator = intersect(P, Q).length
    maxTransVec = []
  }
  // console.log("numerator:", numerator)
  // console.log("maxTransVec:", maxTransVec)
  let sCard = numerator/Math.max(m, n)

  return [sCard, maxTransVec]

}
