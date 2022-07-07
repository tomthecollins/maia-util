'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = array_object_index_of_array;

var _array_equals = require('./array_equals');

var _array_equals2 = _interopRequireDefault(_array_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function array_object_index_of_array(myArray, searchArray, property) {
  // Tom Collins 27/1/2015.
  // In
  // myArray Array mandatory
  // searchArray Array mandatory
  // property String mandatory
  // Out Integer
  // In an array of objects, this function locates the index of an array object
  // whose specifiable property is equal to a specifiable array.

  for (var i = 0, len = myArray.length; i < len; i++) {
    if ((0, _array_equals2.default)(myArray[i][property], searchArray)) return i;
  }
  return -1;
}