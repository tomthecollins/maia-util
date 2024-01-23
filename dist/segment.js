'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = segment;

var _get_unique = require('./get_unique');

var _get_unique2 = _interopRequireDefault(_get_unique);

var _max_argmax = require('./max_argmax');

var _max_argmax2 = _interopRequireDefault(_max_argmax);

var _points_belonging_to_interval = require('./points_belonging_to_interval');

var _points_belonging_to_interval2 = _interopRequireDefault(_points_belonging_to_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function segment(pointSet) {
  var onAndOff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var onIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var durIdx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

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
  for (var i = 0; i < L; i++) {
    ontimes[i] = pointSet[i][onIdx];
  }
  // Even if onAndOff = false, we still need the maximal offtime for the ending
  // time of the final segment, so might as well create offtimes variable
  // anyway.
  var offtimes = new Array(L);
  for (var _i = 0; _i < L; _i++) {
    offtimes[_i] = pointSet[_i][onIdx] + pointSet[_i][durIdx];
  }

  // Calculate the unique times.
  if (onAndOff) {
    var segtimes = ontimes.concat(offtimes);
  } else {
    var segtimes = ontimes;
  }
  segtimes.sort(function (a, b) {
    return a - b;
  });
  var uniquetimes = (0, _get_unique2.default)(segtimes);

  // For each unique time, find the notes that sound at this time.
  var d = uniquetimes.length;
  var segments = [];
  if (onAndOff) {
    for (var k = 0; k < d - 1; k++) {
      var a = uniquetimes[k];
      var b = uniquetimes[k + 1];
      // Test that this is really a segment, and not an artifact from rounding
      // tuplet on/offtimes.
      if (b - a > .00002) {
        segments.push({
          "ontime": a,
          "offtime": b,
          "points": (0, _points_belonging_to_interval2.default)(pointSet, a, b, onIdx, durIdx)
        });
      }
    }
  } else {
    for (var _k = 0; _k < d; _k++) {
      var a = uniquetimes[_k];
      if (_k < d - 1) {
        var b = uniquetimes[_k + 1];
      } else {
        var b = (0, _max_argmax2.default)(offtimes)[0];
      }
      // Test that this is really a segment, and not an artifact from rounding
      // tuplet on/offtimes.
      if (b - a > .00002) {
        segments.push({
          "ontime": a,
          "offtime": b,
          "points": (0, _points_belonging_to_interval2.default)(pointSet, a, b)
        });
      }
    }
  }
  return segments;
}