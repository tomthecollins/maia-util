/**
 * This function selects an element at random from the input array and returns
 * it. Optionally choices can be weighted by the parallel array cdf, which
 * contains a cumulative distribution function.
 *
 * @author Tom Collins
 * @comment 16th October 2014
 * @param {string|number|booelan[]} arr - An array.
 * @param {string|number|booelan[]} [cdf] - An array.
 * @return {(string|number|booelan)} An element from `arr`.
 *
 * @example
 *     choose_one(["jp", "mn", "hc"]);
 * →
 * "hc"
 */
export default function choose_one(arr, cdf){
  if (arr.length > 0){
    if (cdf == undefined){
      var idx = Math.floor((Math.random()*arr.length));
      return arr[idx];
    }
    else {
      let jdx = 0
      const rand = Math.random()
      while (rand >= cdf[jdx]){
        jdx++
      }
      // console.log("jdx:", jdx)
      return arr[jdx]
    }
  }
}
