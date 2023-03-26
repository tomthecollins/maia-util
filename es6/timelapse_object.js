import rand_5_bit from './rand_5_bit'
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

export default function timelapse_object(
  idEntity = null, idEditOf = null, stamp = false, len = 5
){
  if (!stamp){
    return {
      "id": rand_5_bit(len)
    }
  }
  return {
    "id": rand_5_bit(len),
    // "id": uu(),
    "idEntity": idEntity,
    "idEditOf": idEditOf,
    "stampCreate": Date.now(),
    "stampDelete": null
  }
}
