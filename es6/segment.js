import get_unique from './get_unique'
import max_argmax from './max_argmax'
import points_belonging_to_interval from './points_belonging_to_interval'

export default function segment(
  pointSet, onAndOff = true, onIdx = 0, durIdx = 3
){
  // Tom Collins 25/10/2011.
  // In
  // pointSet Array mandatory
  // onAndOff Boolean optional
  // onIdx Integer optional
  // durIdx Integer optional
  // Out Array
  // This function will take a point set as input, calculate the unique ontimes
  // and offtimes, and return collections of notes that sound at each of the
  // unique times. It is a utility function, used by the HarmAn_forward
  // algorithm and various Markov models.
  //
  // The onAndOff variable is set to true by default, and will use both ontimes
  // and offtimes in the segmentation. If set to false, only ontimes will lead
  // to the creation of new segments, which end where the next ontime occurs. If
  // offtimes are noisier (e.g., in transcribed data), onAndOff = false is a
  // better option.

  // Get all the ontimes.
  var L = pointSet.length;
  var ontimes = new Array(L);
  for (let i = 0; i < L; i++){
    ontimes[i] = pointSet[i][onIdx];
  }
  // Even if onAndOff = false, we still need the maximal offtime for the ending
  // time of the final segment, so might as well create offtimes variable
  // anyway.
  var offtimes = new Array(L);
  for (let i = 0; i < L; i++){
    offtimes[i] = pointSet[i][onIdx] + pointSet[i][durIdx];
  }

  // Calculate the unique times.
  if (onAndOff){
    var segtimes = ontimes.concat(offtimes);
  }
  else {
    var segtimes = ontimes
  }
  segtimes.sort(function(a, b){ return a - b });
  var uniquetimes = get_unique(segtimes);

  // For each unique time, find the notes that sound at this time.
  var d = uniquetimes.length;
  var segments = [];
  if (onAndOff){
    for (let k = 0; k < d - 1; k++){
      var a = uniquetimes[k];
      var b = uniquetimes[k + 1];
      // Test that this is really a segment, and not an artifact from rounding
      // tuplet on/offtimes.
      if (b - a > .00002){
        segments.push({
          "ontime": a,
          "offtime": b,
          "points": points_belonging_to_interval(pointSet, a, b, onIdx, durIdx)
        });
      }
    }
  }
  else {
    for (let k = 0; k < d; k++){
      var a = uniquetimes[k];
      if (k < d - 1){
        var b = uniquetimes[k + 1];
      }
      else {
        var b = max_argmax(offtimes)[0]
      }
      // Test that this is really a segment, and not an artifact from rounding
      // tuplet on/offtimes.
      if (b - a > .00002){
        segments.push({
          "ontime": a,
          "offtime": b,
          "points": points_belonging_to_interval(pointSet, a, b)
        });
      }
    }
  }
  return segments;
}
