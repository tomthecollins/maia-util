import mean from './mean'

/**
 * This function calculates the sample excess kurtosis of an input array.
 *
 * @author Tom Collins
 * @comment 20th April 2020
 * @param {number[]} arr - An array.
 * @return {number} The calculated sample excess kurtosis.
 *
 * @example
 *     excess_kurtosis([7.7, 10.5, 10.0, 13.3, 14.5, 19.1]);
 * →
 * -0.7508978
 */
export default function excess_kurtosis(x){
  const xbar = mean(x)
  let s4 = 0
  x.forEach(function(val){
    s4 += Math.pow((val - xbar), 4);
  })
  let s2 = 0
  x.forEach(function(val){
    s2 += Math.pow((val - xbar), 2);
  })
  if (s2 > 0){
    return (s4/x.length)/Math.pow(s2/x.length, 2) - 3
  }
}
