import row_of_max_ontime_leq_ontime_arg from './row_of_max_ontime_leq_ontime_arg'

/**
 * Given an ontime and a time-signature array (with ontimes included), this
 * function returns the bar number and beat number of that ontime. Bar numbers
 * are one-indexed, meaning the bar number of an ontime in an anacrusis is zero.
 *
 * @author Tom Collins
 * @comment 17th October 2014
 * @param {number} ontime - An ontime (time counting in crotchet beats starting
 * from 0 for bar 1 beat 1) for which we want to know the corresponding bar and
 * beat number.
 * @param {TimeSignature[]} time_sigs_array - An array of time signatures.
 * @return {number[]} An array whose first element is a bar number and whose
 * second element is a beat number.
 *
 * @example
 *     var tsArr = [
 *   {
 *     "barNo": 1,
 *     "topNo": 4,
 *     "bottomNo": 4,
 *     "ontime": 0
 *   },
 *   {
 *     "barNo": 3,
 *     "topNo": 3,
 *     "bottomNo": 4,
 *     "ontime": 8
 *   }
 * ];
 * bar_and_beat_number_of_ontime(11, tsArr);
 * →
 * [4, 1]
 */
export default function bar_and_beat_number_of_ontime(ontime, time_sigs_array){
  var n = time_sigs_array.length;
  var relevant_row = row_of_max_ontime_leq_ontime_arg(ontime, time_sigs_array);
  if (ontime >= 0) {
    var excess = ontime - relevant_row["ontime"];
    var local_beat_bar = relevant_row["topNo"]*4/relevant_row["bottomNo"];
    var a = [
      relevant_row["barNo"] + Math.floor(excess/local_beat_bar),
      (excess % local_beat_bar) + 1
    ];
  }
  else {
    var anacrusis_beat = time_sigs_array[0]["topNo"] + ontime + 1;
    var a = [0, anacrusis_beat];
  }
  return a;
};
