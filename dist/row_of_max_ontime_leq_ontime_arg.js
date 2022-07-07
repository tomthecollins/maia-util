"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = row_of_max_ontime_leq_ontime_arg;
function row_of_max_ontime_leq_ontime_arg(ontime, time_sigs_array) {
  // Tom Collins 17/10/2014.
  // In
  // ontime Number mandatory
  // time_sigs_array Array mandatory
  // Out Array
  // This function returns the row (in a list of time signatures) of the
  // maximal ontime less than or equal to the ontime argument.

  var ontime_out = time_sigs_array[0];
  var i = 0;
  var n = time_sigs_array.length;
  while (i < n) {
    if (ontime < time_sigs_array[i]["ontime"]) {
      ontime_out = time_sigs_array[i - 1];
      i = n - 1;
    } else if (ontime == time_sigs_array[0]["ontime"]) {
      ontime_out = time_sigs_array[i];
      i = n - 1;
    } else if (i == n - 1) {
      ontime_out = time_sigs_array[i];
    }
    i = i + 1;
  }
  return ontime_out;
};