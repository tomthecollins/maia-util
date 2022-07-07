'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = index_item_1st_doesnt_occur;

var _array_equals = require('./array_equals');

var _array_equals2 = _interopRequireDefault(_array_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index_item_1st_doesnt_occur(arr, a) {
  // Tom Collins 1/2/2015.
  // In
  // a Array, Boolean, Number, or String mandatory
  // Out Integer
  // Returns the index at which the given argument a first does not occur. It
  // is robust in the sense that it will match arguments consisting of arrays,
  // strings, and booleans as well as numbers. It will not match arbitrary
  // objects, however (see second example in testing).

  var typeofa = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var instanceofarraya = a instanceof Array;
  var idx = -1;
  var i = 0;
  while (i < arr.length) {
    if (!(_typeof(arr[i]) == typeofa) || instanceofarraya && !(arr[i] instanceof Array)) {
      idx = i;
      i = arr.length - 1;
    } else {
      if (instanceofarraya && arr[i] instanceof Array) {
        if (!(0, _array_equals2.default)(arr[i], a)) {
          idx = i;
          i = arr.length - 1;
        }
      } else {
        if (!(arr[i] == a)) {
          idx = i;
          i = arr.length - 1;
        }
      }
    }
    i = i + 1;
  }
  return idx;
}