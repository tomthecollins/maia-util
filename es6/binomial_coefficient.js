import factorial from './factorial'

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
export default function binomial_coefficient(n, k){
  return factorial(n)/factorial(k)/factorial(n - k >= 0 ? n - k : NaN)
}
