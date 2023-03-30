'use strict';

var _array_equals = require('./array_equals');

var _array_equals2 = _interopRequireDefault(_array_equals);

var _array_approx_equals = require('./array_approx_equals');

var _array_approx_equals2 = _interopRequireDefault(_array_approx_equals);

var _index_item_1st_occurs = require('./index_item_1st_occurs');

var _index_item_1st_occurs2 = _interopRequireDefault(_index_item_1st_occurs);

var _index_item_1st_doesnt_occur = require('./index_item_1st_doesnt_occur');

var _index_item_1st_doesnt_occur2 = _interopRequireDefault(_index_item_1st_doesnt_occur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Array.prototype.equals = function (a) {
  return (0, _array_equals2.default)(this, a);
};

Array.prototype.approx_equals = function (a) {
  var tol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.00002;

  return (0, _array_approx_equals2.default)(this, a, tol);
};

Array.prototype.index_item_1st_occurs = function (a) {
  return (0, _index_item_1st_occurs2.default)(this, a);
};

Array.prototype.index_item_1st_doesnt_occur = function (a) {
  return (0, _index_item_1st_doesnt_occur2.default)(this, a);
};