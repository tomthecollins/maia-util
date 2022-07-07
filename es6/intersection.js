import lex_less_or_equal from './lex_less_or_equal'

/**
 * This function returns the intersection of two multidimensional numeric,
 * arrays, assuming both are already in increasing lexicographic order to
 * achieve O(n) computational complexity.
 *
 * @author Tom Collins
 * @comment 30th June 2022
 * @param {number[]} arr0 - An array.
 * @param {number[]} arr1 - An array.
 * @param {(boolean|number)} index - Indicates whether and which indices to
 * record as belonging to the intersection. Takes value 0 if recording indices
 * from arr0; value 1 if recording indices from arr0; true if recording indices
 * from both; and false otherwise.
 * @return {number[]} An array.
 *
 * @example
 *     intersection([[1, 4], [2, -2]], [[-2, 3], [2, -2], [4, 1]])
 * →
 * [[2, -2]]
 */
export default function intersection(arr0, arr1, index = false){
  const ans = []
  let indices
  if (index === 0 || index === 1 || index){
    indices = []
  }
  let i = 0 // Counter for arr0.
  let j = 0 // Counter for arr1.
  while (i < arr0.length && j < arr1.length){
    // console.log("i:", i, "j:", j)
    const c = lex_less_or_equal(arr0[i], arr1[j])
    // console.log("c:", c)
    if (c < 0){
      j++
    }
    else if (c > 0){
      i++
    }
    else {
      ans.push(arr0[i])
      // Handle recording of indices.
      if (index === 0){
        indices.push(i)
      }
      else if (index === 1){
        indices.push(j)
      }
      else if (index){
        indices[0].push(i)
        indices[1].push(j)
      }
      i++
      j++
    }
  }
  if (index === 0 || index === 1 || index){
    return [ans, indices]
  }
  else {
    return ans
  }
}
