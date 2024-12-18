'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = translators;

var _intersection = require('./intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _intersection_hash = require('./intersection_hash');

var _intersection_hash2 = _interopRequireDefault(_intersection_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example
// const D = [[5, 6], [5, 7], [6, 7], [7, 8], [8, 5], [8, 7], [8, 9], [9, 7],
//   [9, 8], [10, 8], [12, 6], [12, 8], [12, 10], [13, 5], [13, 9], [14, 7],
//   [15, 5], [15, 7], [15, 10], [16, 6]]
// const P = [[10, 8], [12, 8], [12, 10], [13, 9]]
// const ans = translators(P, D)
// console.log("ans:", ans)

function translators(P, D) {
  var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Tom Collins 7/12/2024.
  // In
  // P Array mandatory
  // D Array mandatory
  // Out Array
  // This function calculates the translators of a point set P in the (larger)
  // point set D (containing n k-dimensional points). It is assumed that both
  // point sets are non-empty and in lexicograhic order, and that each element
  // of P is an element of D.

  // I think this could be made even quicker if we hashed D, because then the
  // intersections in lines 42 and 54 would run faster.

  if (P.length === 1) {
    return dmv(D, P[0]);
  } else if (P.length === D.length) {
    // Return the zero vector.
    return P[0].map(function () {
      return 0;
    });
  }

  // (P.length > 1)
  else {
      var _ret = function () {
        // Take p1 and calculate D - p_0.
        var E = dmv(D, P[0]);
        // console.log("E from dmv(D, P[0]):", E)

        // Hash D.
        var Dh = void 0;
        if (hash) {
          Dh = {};
          D.map(function (d, idx) {
            var hash = d.map(function (val) {
              // Calculate difference rounded to 5 d.p. and convert to string.
              return (Math.round(100000 * val) / 100000).toString();
            }).toString();
            if (Dh[hash] === undefined) {
              Dh[hash] = idx;
            } else {
              console.log("Error: non-unique entry in D!");
              return;
            }
          });
          // console.log("Dh:", Dh)
        }

        var E_and_indices = void 0;
        if (hash) {
          E_and_indices = (0, _intersection_hash2.default)(dpv(E, P[1]), Dh, true);
        } else {
          E_and_indices = (0, _intersection2.default)(dpv(E, P[1]), D, 0);
        }
        // console.log("E_and_indices for p_1:", E_and_indices)

        var i = 1;
        while (i < P.length - 1 && E_and_indices[1]) {
          // console.log("i:", i)
          // Candidates that remain:
          E = E_and_indices[1].map(function (idx) {
            return E[idx];
          });
          // console.log("candidates E after p_" + i + ":", E)

          if (hash) {
            E_and_indices = (0, _intersection_hash2.default)(dpv(E, P[i + 1]), Dh, true);
          } else {
            E_and_indices = (0, _intersection2.default)(dpv(E, P[i + 1]), D, 0);
          }
          // console.log("E_and_indices for p_" + (i + 1) + ":", E_and_indices)

          i = i + 1;
        }
        return {
          v: E
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
}

// D minus a vector
function dmv(_D, _v) {
  return _D.map(function (d) {
    return d.map(function (di, i) {
      return di - _v[i];
    });
  });
}

// D plus a vector
function dpv(_D, _v) {
  return _D.map(function (d) {
    return d.map(function (di, i) {
      return di + _v[i];
    });
  });
}