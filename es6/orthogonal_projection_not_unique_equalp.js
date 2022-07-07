
export default function orthogonal_projection_not_unique_equalp(point_set, indicator){
  // Tom Collins 22/12/2014.
  // In
  // point_set Array mandatory
  // indicator Array mandatory
  // Out Array
  // Given a set of vectors (all members of the same n-dimensional vector
  // space), and an n-tuple of zeros and ones indicating a particular
  // orthogonal projection, this function returns the projected set of vectors.

  var set_out = [];
  for (let ip = 0; ip < point_set.length; ip++){
    var curr_point = [];
    for (let id = 0; id < point_set[0].length; id++){
      if (indicator[id] == 1){
        curr_point.push(point_set[ip][id]);
      }
    }
    set_out.push(curr_point);
  }
  return set_out;
}
