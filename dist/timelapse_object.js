"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timelapse_object;
var uu = require("uuid/v4");
/**
 * This function counts rows of the input `point_set`, weighted, if desired, by
 * values in `wght_idx`.
 *
 * @author Tom Collins
 * @comment 18th August 2022
 * @param {string} [idEntity] - A uuid indicating a specific entity.
 * @param {string} [idEditOf] - A uuid indicating a specific element of which
 * this element is an edited version.
 * @return {Object} An object containing the properties id, idEntityOf,
 * idEditOf, stampCreate, and stampDelete.
 *
 * @example
 *     timelapse_object()
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

  return {
    "id": uu(),
    "idEntity": idEntity,
    "idEditOf": idEditOf,
    "stampCreate": Date.now(),
    "stampDelete": null
  };
}