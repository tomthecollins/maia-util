import min_argmin from './min_argmin'

/**
 * This function quantises time values in the input point set `D` by mapping
 * their fractional parts to the closest member of the Farey sequence of order
 * *n* (second argument). In a standard point set, time values are located in
 * the first (ontime) and third (duration) indices of each point, hence the
 * default argument for `dim` is `[0, 3]`.
 *
 * @author Tom Collins
 * @comment 21st January 2018
 * @param {PointSet} D - A point set
 * @param {number[]} [Fn] - Usually a Farey sequence
 * @param {number[]} [dim] - An array of nonnegative integers indicating the
 * indices of time values in the point set.
 * @return {PointSet} Quantised point set
 *
 * @example
 *     var ps = [
 *   [1.523, 60, 0.980],
 *   [2.873, 72, 0.192]
 * ];
 * var fareySeq = [0, 0.5, 1];
 * var dimArr = [0, 2];
 * farey_quantise(ps, fareySeq, dimArr);
 * →
 * [
 *   [1.5, 60, 1],
 *   [3, 72, 0.5]
 * ];
 */
export default function farey_quantise(D, Fn, dim){
  if (Fn === undefined){
    Fn = farey(4);
  }
  if (dim === undefined){
    dim = [0, 3];
  }
  D.forEach(function(d){
    dim.map(function(j){
      // Compute the difference between each time value and Farey sequence
      // member. The fractional part is d[j] - Math.floor(d[j]).
      var diffs = Fn.map(function(x){
        return Math.abs(d[j] - Math.floor(d[j]) - x);
      });
      // Compute minimum difference.
      var ma = min_argmin(diffs);
      // Reset the fractional part of the time value to be the Farey sequence
      // member corresponding to the minimum difference.
      d[j] = Math.floor(d[j]) + Fn[ma[1]];
      // Can't have zero durations so correct any of these.
      if ((j == 2 || j == 3) && d[j] == 0){
        d[j] = Fn[1];
      }
      return;
    });
    return d;
  });
  return D;
};
