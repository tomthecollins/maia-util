import mean from './mean'
import median from './median'
import std from './std'

/**
 * This function calculates the median skewness (Pearson's second skewness
 * coefficient) of a sample contained in an input array.
 *
 * @author Tom Collins
 * @comment 3th September 2020
 * @param {number[]} arr - An array.
 * @return {number} The calculated median skewness.
 *
 * @example
 *     median_skewness([7.7, 10.5, 10.0, 13.3, 14.5, 19.1]);
 * →
 * 0.5019952
 */
export default function median_skewness(x){
  const unbiasedVar = Math.pow(std(x), 2)
  const biasedVar = unbiasedVar*(x.length - 1)/x.length
  return 3*(mean(x) - median(x))/Math.sqrt(biasedVar)
}
