import get_random_int from './get_random_int'

/**
 * This function returns a random sample of elements from an input array, where
 * the sampling is without replacement.
 *
 * @author Tom Collins
 * @comment 30th June 2019
 * @param {Array<number|string|boolean>} arr - Input array
 * @param {number} sampleSize - Size of requested sample
 * @return {Array<number|string|boolean>} Output array
 *
 * @example
 *     sample_without_replacement(["a", "b", "c"], 2);
 * →
 * ["c", "a"]
 */
export default function sample_without_replacement(arr, sampleSize){
  var n = arr.length;
  if (n > 0){
    if (n >= sampleSize){
      var idxUnchosen = new Array(n);
      for (var i = 0; i < n; i++){
        idxUnchosen[i] = i;
      }
      // console.log("idxUnchosen:", idxUnchosen);
      var idxChosen = [];
      while (idxChosen.length < sampleSize){
        // Choose one of the idxUnchosen.
        var idxChoice = get_random_int(0, idxUnchosen.length);
        // console.log("idxChoice:", idxChoice);
        // Add it to idxChosen.
        idxChosen.push(idxUnchosen[idxChoice]);
        // console.log("idxChosen:", idxChosen);
        // Remove it from idxUnchosen.
        idxUnchosen.splice(idxChoice, 1);
        // console.log("idxUnchosen:", idxUnchosen);
      }
      return idxChosen.map(function(idx){
        return arr[idx];
      });
    }
  }
}
