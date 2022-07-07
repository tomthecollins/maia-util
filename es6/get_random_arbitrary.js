export default function get_random_arbitrary(min, max){
  // Mozilla 11/2015.
  // In
  // min Number mandatory
  // max Number mandatory
  // Out Number
  // Returns a random number between min (inclusive) and max (exclusive).
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  return Math.random() * (max - min) + min;
}
