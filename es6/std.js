import mean from './mean'

/**
 * This function calculates the sample standard deviation of an input array.
 *
 * @author Tom Collins
 * @comment 5th April 2020
 * @param {number|booelan[]} arr - An array.
 * @param {string|number|booelan[]} [cdf] - An array.
 * @return {(string|number|booelan)} An element from `arr`.
 *
 * @example
 *     std([727.7, 1086.5, 1091.0, 1361.3, 1490.5, 1956.1]);
 * →
 * 420.96
 */
export default function std(x){
  const xbar = mean(x)
  let ss = 0
  x.forEach(function(val){
    ss += Math.pow((val - xbar), 2);
  })
  return Math.sqrt(ss/(x.length - 1))
}
