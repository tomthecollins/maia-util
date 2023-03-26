/**
 * This function generates a string of specifiable length, consisting of random
 * alpha-numeric characters.
 *
 * @author Tom Collins
 * @comment 26th April 2023
 * @param {number} len - A number specifying the desired length of the string.
 * @return {string} The string of random alpha-numeric characters.
 *
 * @example
 *     rand_alphanumeric(3)
 * →
 * "k6j"
 */
export default function rand_alphanumeric(len){
  // 48-57 encode 0-9, and 97-122 encode a-z.
  let outArr = new Array(len)
  for (let i = 0; i < len; i++){
    // Generate a random integer between 87 and 122. If it's less than 97,
    // subtract 39 to get into the range 48-57.
    outArr[i] = 87 + Math.floor(36*Math.random())
    if (outArr[i] < 97){
      outArr[i] -= 39
    }
    outArr[i] = String.fromCharCode(outArr[i])
  }
  return outArr.join("")
}
