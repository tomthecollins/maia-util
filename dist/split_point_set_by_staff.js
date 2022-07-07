'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = split_point_set_by_staff;

var _restrict_point_set_in_nth_to_xs = require('./restrict_point_set_in_nth_to_xs');

var _restrict_point_set_in_nth_to_xs2 = _interopRequireDefault(_restrict_point_set_in_nth_to_xs);

var _get_unique = require('./get_unique');

var _get_unique2 = _interopRequireDefault(_get_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function split_point_set_by_staff(point_set, staff_idx) {
  // Tom Collins 2/2/2015.
  // In
  // point_set Array mandatory
  // staff_idx Integer mandatory
  // Out Array
  // This function splits a point set into multiple point sets, grouping by the
  // values in the (staff_idx)th element.

  // Get the unique staves.
  var staves = [];
  for (var ipt = 0; ipt < point_set.length; ipt++) {
    staves.push(point_set[ipt][staff_idx]);
  }
  var unq_staves = (0, _get_unique2.default)(staves).sort(function (a, b) {
    return a - b;
  });
  var out_array = [];
  // Create a point set consisting of points in each staff.
  for (var iuq = 0; iuq < unq_staves.length; iuq++) {
    var curr_point_set = (0, _restrict_point_set_in_nth_to_xs2.default)(point_set, staff_idx, [unq_staves[iuq]]);
    out_array[iuq] = curr_point_set;
  }
  return out_array;
}