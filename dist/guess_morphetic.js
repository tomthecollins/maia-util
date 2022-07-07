'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guess_morphetic;

var _guess_morphetic_in_c_major = require('./guess_morphetic_in_c_major');

var _guess_morphetic_in_c_major2 = _interopRequireDefault(_guess_morphetic_in_c_major);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fifth_steps_lookup_array = [
// Major keys.
[[-6, 0], 6, 4], [[-5, 0], -1, -1], [[-4, 0], 4, 2], [[-3, 0], -3, -2], [[-2, 0], 2, 1], [[-1, 0], -5, -3], [[0, 0], 0, 0], [[1, 0], 5, 3], [[2, 0], -2, -1], [[3, 0], 3, 2], [[4, 0], -4, -2], [[5, 0], 1, 1], [[6, 0], -6, -3],
// Minor keys.
[[-3, 5], 6, 4], [[-2, 5], -1, -1], [[-1, 5], 4, 2], [[0, 5], -3, -2], [[1, 5], 2, 1], [[2, 5], -5, -3], [[3, 5], 0, 0], [[4, 5], 5, 3], [[5, 5], -2, -1], [[6, 5], 3, 2], [[-6, 5], 3, 2], [[7, 5], -4, -2], [[-5, 5], -4, -2], [[8, 5], 1, 1], [[-4, 5], 1, 1], [[9, 5], -6, -3]];
function guess_morphetic(mnn, fifth_steps, mode) {
  // Tom Collins 15/10/2014.
  // In
  // mnn Integer mandatory
  // fifth_steps Integer mandatory
  // mode Integer mandatory
  // This function takes a MIDI note number and a key (represented by steps on
  // the circle of fiths, and mode). It attempts to guess the corresponding
  // morphetic pitch number, given the key.

  var fifth_steps_idx = 0;
  var n = fifth_steps_lookup_array.length;
  var i = 0;
  while (i < n) {
    if (fifth_steps == fifth_steps_lookup_array[i][0][0] && mode == fifth_steps_lookup_array[i][0][1]) {
      fifth_steps_idx = i;
      i = n - 1;
    }
    i = i + 1;
  }
  var trans = fifth_steps_lookup_array[fifth_steps_idx].slice(1);
  var z = mnn + trans[0];
  var w = (0, _guess_morphetic_in_c_major2.default)(z);
  var a = w - trans[1];
  return a;
};