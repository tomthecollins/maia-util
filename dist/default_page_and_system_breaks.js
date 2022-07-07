"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = default_page_and_system_breaks;
function default_page_and_system_breaks(staff_and_clef_names, final_bar_no) {
  // Tom Collins 1/3/2015.
  // In
  // staff_and_clef_names Array mandatory
  // final_bar_no Integer mandatory
  // Out Array
  // If the page_breaks and system_breaks variables are empty, this function
  // will populate them with default values based on the number of staves and
  // bars.

  var page_breaks = [];
  var system_breaks = [];
  var nos_staves = staff_and_clef_names.length;
  switch (nos_staves) {
    case 1:
      var sbreak = 4;
      var pbreak = 10 * sbreak;
      break;
    case 2:
      var sbreak = 4;
      var pbreak = 5 * sbreak;
      break;
    case 3:
      var sbreak = 4;
      var pbreak = 3 * sbreak;
      break;
    case 4:
      var sbreak = 4;
      var pbreak = 2 * sbreak;
      break;
    case 5:
      var sbreak = 4;
      var pbreak = 2 * sbreak;
      break;
    case 6:
      var sbreak = 4;
      var pbreak = 2 * sbreak;
      break;
    default:
      var sbreak = 4;
      var pbreak = sbreak;
      break;
  }
  var curr_bar = sbreak;
  while (curr_bar < final_bar_no) {
    if (curr_bar % pbreak == 0) {
      page_breaks.push(curr_bar + 1);
    } else {
      system_breaks.push(curr_bar + 1);
    }
    curr_bar = curr_bar + sbreak;
  }
  return [page_breaks, system_breaks];
}