export default function get_random_int_inclusive(min, max){
  // Mozilla 11/2015.
  // In
  // min Integer mandatory
  // max Integer mandatory
  // Out Number
  // Returns a random integer between min (included) and max (included).
  // Using Math.round() will give you a non-uniform distribution!
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
