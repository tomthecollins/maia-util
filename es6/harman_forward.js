import find_segment_against_template from './find_segment_against_template'
import unique_rows from './unique_rows'

/**
 * This function labels input sets of notes (in `segments`), with chord names as
 * provided in `templates` and `lookup`. Contiguous sets of notes may be
 * combined and given the same label, if it is parsimonious to do so according
 * to the algorithm. There is also some tolerance for non-chord tones. The
 * function is an implementation of the forwards HarmAn algorithm of Pardo and
 * Birmingham (2002).
 *
 * @author Tom Collins
 * @comment 26th October 2011
 * @tutorial chord-labelling-1
 * @param {Segment[]} segments - An array of segments
 * @param {number[][]} templates - An array of pitch-class sets.
 * @param {string[]} lookup - An array of strings paraellel to templates, giving
 * the interpretable label of each pitch-class set.
 * @return {Segment[]} An array of segments where the additional, extra
 * properties of name, index, and score have been populated, so as to (possibly
 * combine) and label the chords from the input `segments` with names from
 * `templates` and `lookup`.
 *
 * @example
 *     var ps = [
 *   [0, 45, 4], [0.5, 52, 3.5], [1, 59, 0.5], [1.5, 60, 2.5],
 *   [4, 41, 4], [4.5, 48, 3.5], [5, 55, 0.5], [5.5, 57, 2.5]
 * ];
 * var seg = segment(ps);
 * harman_forward(seg, chord_templates_pbmin7ths, chord_lookup_pbmin7ths);
 * →
 * [
 *   {
 *     "ontime": 0,
 *     "offtime": 4.5,
 *     "points": [
 *                 [0, 45, 51, 4, 0],
 *                 [0.5, 52, 55, 3.5, 0],
 *                 [1, 59, 59, 0.5, 0],
 *                 [1.5, 60, 60, 2.5, 0],
 *                 [4, 41, 49, 4, 0]
 *               ],
 *     "name": "A minor",
 *     "index": 33,
 *     "score": 6
 *   },
 *   {
 *     "ontime": 4.5,
 *     "offtime": 8,
 *     "points": [
 *                 [4, 41, 49, 4, 0],
 *                 [4.5, 48, 53, 3.5, 0],
 *                 [5, 55, 57, 0.5, 0],
 *                 [5.5, 57, 58, 2.5, 0]
 *               ],
 *     "name": "F major",
 *     "index": 5,
 *     "score": 6
 *   }
 * ]
 */
export default function harman_forward(segments, templates, lookup){
  var L = segments.length;
  var lab = new Array();
  // Get the score for the very first segment.
  if (L > 0) {
    currentfind = find_segment_against_template(segments[0], templates);
    currentscore = currentfind.score;
  }
  // No testing to be done here, because there is no previous segment with
  // which to combine it, so just add it to lab.
  lab[0]= {
    "ontime": segments[0].ontime, "offtime": segments[0].offtime,
    "points": segments[0].points, "score": currentscore,
    "index": currentfind.index, "name": lookup[currentfind.index]
  };
  // console.log('lab[0].points:', lab[0].points);
  var i = 1; // Iterate over the remaining elements of segments.
  var j = 1; // Iterate over entries to lab.
  while (i < L){
    // Get the score from the last segment.
    var lastscore = lab[j - 1].score;
    // console.log('lastscore:', lastscore);
    // Get the score from the current segment.
    var currentfind = find_segment_against_template(segments[i], templates);
    var currentscore = currentfind.score;
    // console.log('currentscore:', currentscore);
    // Get the score from combining the last and current segments.
    // In my opinion (although I've not read the paper recently), the contents
    // of these segments ought to be de-duplicated as they are combined, e.g.
    // var duopoints = unique_rows(lab[j - 1].points.concat(segments[i].points));
    // This seems to cause over-segmentation, however, so I'm not doing this for
    // now. I am doing a final de-dupe before returning.
    var duopoints = [lab[j - 1].points.concat(segments[i].points)];
    var duosegments = {
      "ontime": lab[j - 1].ontime,
      "offtime": segments[i].offtime,
      "points": duopoints[0]
    };
    // console.log('duosegments.points:', duosegments.points);
    var combinedfind = find_segment_against_template(duosegments, templates);
    var combinedscore = combinedfind.score;
    // console.log('combinedscore:', combinedscore);

    // The test!
    if (combinedscore < lastscore + currentscore){
      // Label separately.
      lab.push({
        "ontime": segments[i].ontime, "offtime": segments[i].offtime,
        "points": segments[i].points, "score": currentscore,
        "index": currentfind.index, "name": lookup[currentfind.index]
      });
      j++;
    }
    else{
      // Label the combined segment.
      lab.pop();
      lab.push({
        "ontime": duosegments.ontime, "offtime": duosegments.offtime,
        "points": duosegments.points, "score": combinedscore,
        "index": combinedfind.index, "name": lookup[combinedfind.index]
      });
    }
    // console.log('lab[' + (j - 1) + '].points:', lab[j - 1].points);
    i++;
  }
  return lab.map(function(s){
    // De-dupe members of the points property.
    var psIdx = unique_rows(s.points);
    s.points = psIdx[0];
    return s;
  });
}


// Informal testing
// import segment from './segment'
// var chord_templates_pbmin7ths = [
//   // Major triads
//   [0, 4, 7], [1, 5 ,8], [2, 6, 9], [3, 7, 10], [4, 8, 11], [5 ,9, 0],
//   [6, 10, 1], [7, 11, 2], [8, 0, 3], [9, 1, 4], [10, 2, 5], [11, 3, 6],
//   // Dominant 7th triads
//   [0, 4, 7, 10], [1, 5 ,8, 11], [2, 6, 9, 0], [3, 7, 10, 1],
//   [4, 8, 11, 2], [5 ,9, 0, 3], [6, 10, 1, 4], [7, 11, 2, 5],
//   [8, 0, 3, 6], [9, 1, 4, 7], [10, 2, 5 ,8], [11, 3, 6, 9],
//   // Minor triads
//   [0, 3, 7], [1, 4, 8], [2, 5 ,9], [3, 6, 10], [4, 7, 11], [5 ,8, 0],
//   [6, 9, 1], [7, 10, 2], [8, 11, 3], [9, 0, 4], [10, 1, 5], [11, 2, 6],
//   // Fully diminished 7th
//   [0, 3, 6, 9], [1, 4, 7, 10], [2, 5 ,8, 11],
//   // Half diminished 7th
//   [0, 3, 6, 10], [1, 4, 7, 11], [2, 5 ,8, 0], [3, 6, 9, 1],
//   [4, 7, 10, 2], [5 ,8, 11, 3], [6, 9, 0, 4], [7, 10, 1, 5],
//   [8, 11, 2, 6], [9, 0, 3, 7], [10, 1, 4, 8], [11, 2, 5 ,9],
//   // Diminished triad
//   [0, 3, 6], [1, 4, 7], [2, 5 ,8], [3, 6, 9], [4, 7, 10], [5 ,8, 11],
//   [6, 9, 0], [7, 10, 1], [8, 11, 2], [9, 0, 3], [10, 1, 4],
//   [11, 2, 5],
//   // Minor 7th
//   [0, 3, 7, 10], [1, 4, 8, 11], [2, 5 ,9, 0], [3, 6, 10, 1],
//   [4, 7, 11, 2], [5 ,8, 0, 3], [6, 9, 1, 4], [7, 10, 2, 5],
//   [8, 11, 3, 6], [9, 0, 4, 7], [10, 1, 5 ,8], [11, 2, 6, 9]
// ];
//
// var chord_lookup_pbmin7ths = [
//   "C major", "Db major", "D major", "Eb major", "E major", "F major",
//   "F# major", "G major", "Ab major", "A major", "Bb major", "B major",
//   "C 7", "Db 7", "D 7", "Eb 7", "E 7", "F 7",
//   "F# 7", "G 7", "Ab 7", "A 7", "Bb 7", "B 7",
//   "C minor", "Db minor", "D minor", "Eb minor", "E minor", "F minor",
//   "F# minor", "G minor", "Ab minor", "A minor", "Bb minor", "B minor",
//   // Because Pardo & Birmingham (2002) only use MIDI note,
//   // there is a bit of an issue with diminished 7th chords
//   // (next three labels), as you can't tell for instance
//   // whether the pitch classes 0, 3, 6, 9 are C Dim 7,
//   // D# Dim 7, F# Dim 7, or A Dim 7. In my Lisp
//   // implementation, I use the surrounding musical context
//   // (including pitch names derived from the combination of
//   // MIDI and morphetic pitch numbers) to attempt to resolve
//   // any ambiguities, but in this JavaScript implementation, I
//   // just assume it's F# Dim 7 (or G Dim 7 or "G# Dim 7
//   // respectively).
//   "F# Dim 7", "G Dim 7", "G# Dim 7",
//   "C half dim 7", "Db half dim 7", "D half dim 7", "Eb half dim 7", "E half dim 7", "F half dim 7",
//   "F# half dim 7", "G half dim 7", "Ab half dim 7", "A half dim 7", "Bb half dim 7", "B half dim 7",
//   "C dim", "Db dim", "D dim", "Eb dim", "E dim", "F dim",
//   "F# dim", "G dim", "Ab dim", "A dim", "Bb dim", "B dim",
//   "C minor 7", "Db minor 7", "D minor 7", "Eb minor 7", "E minor 7", "F minor 7",
//   "F# minor 7", "G minor 7", "Ab minor 7", "A minor 7", "Bb minor 7", "B minor 7"
// ];

// var ps = [
//   [0, 45, 51, 4, 0], [0, 72, 67, 4, 1], [0, 76, 69, 4, 1], [0.5, 52, 55, 3.5, 0], [1, 59, 59, 0.5, 0], [1.5, 60, 60, 2.5, 0],
//   [4, 41, 49, 4, 0], [4, 72, 67, 4, 1], [4, 77, 70, 4, 1], [4.5, 48, 53, 3.5, 0], [5, 55, 57, 0.5, 0], [5.5, 57, 58, 2.5, 0]
// ];
// var seg = segment(ps);
// console.log('seg:', seg);
// var lbl = harman_forward(
//   seg,
//   chord_templates_pbmin7ths,
//   chord_lookup_pbmin7ths
// );
// console.log("lbl:", JSON.stringify(lbl));

// var ps = [
//   [-1, 74, 68, 0.75, 0], [-0.25, 71, 66, 0.25, 0],
//   [0, 55, 57, 0.5, 1], [0, 74, 68, 1, 0], [0.5, 59, 59, 0.5, 1], [1, 62, 61, 0.5, 1], [1.5, 59, 59, 0.5, 1], [2, 62, 61, 0.5, 1], [2, 67, 64, 1, 0], [2.5, 59, 59, 0.5, 1],
//   [3, 57, 58, 0.5, 1], [3, 66, 63, 1, 0], [3.5, 60, 60, 0.5, 1], [4, 62, 61, 0.5, 1], [4.5, 60, 60, 0.5, 1], [5, 62, 61, 0.5, 1], [5, 81, 72, 0.75, 0], [5.5, 60, 60, 0.5, 1], [5.75, 78, 70, 0.25, 0],
//   [6, 54, 56, 0.5, 1], [6, 81, 72, 1, 0], [6.5, 57, 58, 0.5, 1], [7, 62, 61, 0.5, 1], [7.5, 57, 58, 0.5, 1], [8, 62, 61, 0.5, 1], [8, 72, 67, 1, 0], [8.5, 57, 58, 0.5, 1],
//   [9, 55, 57, 0.5, 1], [9, 71, 66, 1, 0], [9.5, 59, 59, 0.5, 1], [10, 62, 61, 0.5, 1], [10.5, 59, 59, 0.5, 1]
// ];
// var seg = segment(ps);
// var lbl = harman_forward(
//   seg,
//   chord_templates_pbmin7ths,
//   chord_lookup_pbmin7ths
// );
// console.log('lbl:', JSON.stringify(lbl));
