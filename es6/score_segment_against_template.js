export default function score_segment_against_template(segment, template){
  // Tom Collins 26/10/2011.
  // In
  // segment Object mandatory
  // template Array mandatory
  // Out Integer
  // This is Pardo and Birmingham's (2002) scoring function.

  var d = segment.points.length;
  var t = template.length;
  var member = new Array(d);
  for (let i = 0; i < d; i++){
    member[i] = segment.points[i][1] % 12;
  }
  var n = 0;
  var m = 0;
  var p = 0;
  for (let i=0; i<t; i++){
    if (member.indexOf(template[i]) === -1){
      m++;
    }
  }
  for (let k=0; k<d; k++){
    if (template.indexOf(member[k]) === -1){
      n++
    }
    else{
      p++;
    }
  }
  return(p - m - n);
}
