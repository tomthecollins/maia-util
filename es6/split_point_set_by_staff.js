import restrict_point_set_in_nth_to_xs from './restrict_point_set_in_nth_to_xs'
import get_unique from './get_unique'


export default function split_point_set_by_staff(point_set, staff_idx){
  // Tom Collins 2/2/2015.
  // In
  // point_set Array mandatory
  // staff_idx Integer mandatory
  // Out Array
  // This function splits a point set into multiple point sets, grouping by the
  // values in the (staff_idx)th element.

  // Get the unique staves.
  var staves = [];
  for (let ipt = 0; ipt < point_set.length; ipt++){
    staves.push(point_set[ipt][staff_idx]);
  }
  var unq_staves = get_unique(staves).sort(function(a, b){return a - b});
  var out_array = [];
  // Create a point set consisting of points in each staff.
  for (let iuq = 0; iuq < unq_staves.length; iuq++){
    var curr_point_set = restrict_point_set_in_nth_to_xs(
      point_set, staff_idx, [unq_staves[iuq]]);
    out_array[iuq] = curr_point_set;

  }
  return out_array;
}
