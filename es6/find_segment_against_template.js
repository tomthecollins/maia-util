import score_segment_against_template from './score_segment_against_template'
import max_argmax from './max_argmax'

export default function find_segment_against_template(segment, template_set){
  // Tom Collins 26/10/2011.
  // In
  // segment Array mandatory
  // template_set Array mandatory
  // This function returns the chord template to which the input segment is
  // best matched, according to Pardo and Birmingham's (2002) scoring function.
  var d = template_set.length;
  var storage = new Array(d);
  for (let k = 0; k < d; k++){
    storage[k] = score_segment_against_template(segment, template_set[k]);
  }
  var mam = max_argmax(storage);
  var k = mam[1];
  return { "score": storage[k], "index": k, "vector": template_set[k] };
  //return(outtemplate);
}
