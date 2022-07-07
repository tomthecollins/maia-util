'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = group_grace_by_contiguous_id;

var _sort_points_asc_by_id = require('./sort_points_asc_by_id');

var _sort_points_asc_by_id2 = _interopRequireDefault(_sort_points_asc_by_id);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function group_grace_by_contiguous_id(grace_array) {
  // Tom Collins 18/2/2015.
  // In
  // grace_array Array mandatory
  // An array of grace notes is the input to this function. The function groups
  // these grace notes into new arrays whose membership is determined by
  // contiguity of the id fields. This is to make sure that if several grace
  // notes precede an ordinary note, these are grouped together and (later)
  // attached to this ordinary note.

  var ga = grace_array.sort(_sort_points_asc_by_id2.default);
  if (ga.length > 0) {
    var gag = [[ga[0]]];
    var gj = 0;
    for (var gi = 1; gi < ga.length; gi++) {
      if (parseFloat(ga[gi].ID) == parseFloat(gag[gj][gag[gj].length - 1].ID) + 1) {
        gag[gj].push(ga[gi]);
      } else {
        gag.push([ga[gi]]);
        gj++;
      }
    }
  } else {
    var gag = [];
  }
  return gag;
}