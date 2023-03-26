"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timelapse_object;

var _rand_5_bit = require("./rand_5_bit");

var _rand_5_bit2 = _interopRequireDefault(_rand_5_bit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const uu = require("uuid/v4")
/**
 * This function counts rows of the input `point_set`, weighted, if desired, by
 * values in `wght_idx`.
 *
 * @author Tom Collins
 * @comment 18th August 2022
 * @param {string} [idEntity] - A uuid indicating a specific entity.
 * @param {string} [idEditOf] - A uuid indicating a specific element of which
 * this element is an edited version.
 * @param {boolean} [stamp] - A boolean indicating whether to instantiate
 * idEntity, id EditOf, stampCreate, and stampDelete properties.
 *@return {Object} An object containing the properties id, and possibly
 * idEntityOf, idEditOf, stampCreate, and stampDelete.
 *
 * @example
 *     timelapse_object(null, null, true)
 * →
 * {
 *   "id": "18b99848-0d0d-40de-b705-67db3a312817",
 *   "idEntityOf": null,
 *   "idEditOf": null,
 *   "stampCreate": 1660852396,
 *   "stampDelete": null
 * }
 */

function timelapse_object() {
  var idEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var idEditOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var stamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!stamp) {
    return {
      "id": (0, _rand_5_bit2.default)()
    };
  }
  return {
    "id": (0, _rand_5_bit2.default)(),
    // "id": uu(),
    "idEntity": idEntity,
    "idEditOf": idEditOf,
    "stampCreate": Date.now(),
    "stampDelete": null
  };
}