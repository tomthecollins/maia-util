export default function row_of_max_bar_leq_bar_arg(bar, time_sigs_array){
  // Tom Collins 17/10/2014.
  // In
  // bar Integer mandatory
  // time_sigs_array Array mandatory
  // Out Array
  // This function returns the row (in a list of time signatures) of the
  // maximal bar number less than or equal to the bar number argument.

  var bar_out = time_sigs_array[0];
  var i = 0;
  var n = time_sigs_array.length;
  while (i < n) {
    if (bar < time_sigs_array[i]["barNo"]){
      bar_out = time_sigs_array[i - 1];
      i = n - 1;
    }
    else if (bar == time_sigs_array[0]["barNo"]){
      bar_out = time_sigs_array[i];
      i = n - 1;
    }
    else if (i == n - 1){
      bar_out = time_sigs_array[i];
    }
    i=i+1;
  }
  return bar_out;
};
