// Utility.
export default function append_ontimes_to_time_signatures(time_sigs_array, crotchets_per_bar){
  // Tom Collins 26/2/2015.
  // This function appends ontimes to rows of the time-signature table. Added
  // an optional argument crotchets_per_bar, so that in the event of an
  // anacrusis, the first bar is assigned the correct ontime.

  if (crotchets_per_bar == undefined){
    var ontime = 0;
  }
  else{
    var ontime = -crotchets_per_bar;
  }
  time_sigs_array[0]["ontime"] = ontime;
  var i = 1;
  var n = time_sigs_array.length;
  while (i < n) {
    var c = (time_sigs_array[i]["barNo"] - time_sigs_array[i - 1]["barNo"])*time_sigs_array[i - 1]["topNo"]*
    4/time_sigs_array[i - 1]["bottomNo"];
    var d = time_sigs_array[i - 1]["ontime"] + c;
    time_sigs_array[i]["ontime"] = d;
    i=i+1;
  }
  return time_sigs_array;
};
