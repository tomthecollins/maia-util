/**
 * This function calculates the factorial of an input number, e.g.,
 * x * (x - 1) * (x - 2) * ... * 2 * 1.
 *
 * @author Tom Collins
 * @comment 30th March 2023
 * @param {number} x - An integer.
 * @return {number} The calculated factorial.
 *
 * @example
 *     factorial(4)
 * →
 * 24
 */
export default function factorial(x){
  if (x){
    return x*factorial(x - 1)
  }
  else {
    return x + 1
  }
}
