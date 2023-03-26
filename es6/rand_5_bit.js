/**
 * This function generates a string of specifiable length, consisting of random
 * alpha-numeric characters from an alphabet of size 2^5 = 32.
 *
 * @author Tom Collins
 * @comment 26th April 2023
 * @param {number} len - A number specifying the desired length of the string.
 * @return {string} The string of random alpha-numeric characters.
 *
 * @example
 *     rand_5_bit(3)
 * →
 * "k5j"
 */
export default function rand_5_bit(len){
  // 48-53 encode 0-5, and 97-122 encode a-z.
  let outArr = new Array(len)
  for (let i = 0; i < len; i++){
    // Generate a random integer between 91 and 122. If it's less than 97,
    // subtract 43 to get into the range 48-53.
    outArr[i] = 91 + Math.floor(32*Math.random())
    if (outArr[i] < 97){
      outArr[i] -= 43
    }
    outArr[i] = String.fromCharCode(outArr[i])
  }
  return outArr.join("")
}
