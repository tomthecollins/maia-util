"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ontime_of_bar_and_beat_number;

var _row_of_max_bar_leq_bar_arg = require("./row_of_max_bar_leq_bar_arg");

var _row_of_max_bar_leq_bar_arg2 = _interopRequireDefault(_row_of_max_bar_leq_bar_arg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a bar number and beat number, and a time-signature array (with ontimes
 * appended), this function returns the ontime of that bar and beat number.
 *
 * @author Tom Collins
 * @comment 17th October 2014
 * @param {number} bar - A bar number for which we want to know the
 * corresponding ontime (time counting in crotchet beats starting from 0 for bar
 * 1 beat 1).
 * @param {number} beat - A beat number for which we want to know the
 * corresponding ontime (time counting in crotchet beats starting from 0 for bar
 * 1 beat 1).
 * @param {TimeSignature[]} time_sigs_array - An array of time signatures.
 * @return {number} An ontime
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
 * ontime_of_bar_and_beat_number(4, 1, tsArr);
 * →
 * 11
 */
function ontime_of_bar_and_beat_number(bar, beat, time_sigs_array) {
  var n = time_sigs_array.length;
  var relevant_row = (0, _row_of_max_bar_leq_bar_arg2.default)(bar, time_sigs_array);
  var excess = bar - relevant_row["barNo"];
  var local_beat_bar = relevant_row["topNo"] * 4 / relevant_row["bottomNo"];
  var a = relevant_row["ontime"] + excess * local_beat_bar + beat - 1;
  return a;
};