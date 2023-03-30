export default function array_approx_equals(arr, arr2, tol = 0.00002){
  // In
  // array Array mandatory, assumed to be (nested) numeric.
  // Out Boolean
  // Returns true if two arrays are approximately equal, up to a given
  // tolerance, and false otherwise.

  // If the other array is a falsy value, return.
  if (!arr2)
  return false;

  // Compare lengths.
  if (arr.length != arr2.length)
  return false;

  for (let i = 0, l=arr.length; i < l; i++){
    // Check if we have nested arr2s.
    if (arr[i] instanceof Array && arr2[i] instanceof Array){
      // Recurse into the nested arr2s.
      if (!array_approx_equals(arr[i],arr2[i]))
      return false;
    }
    else if (Math.abs(arr[i] - arr2[i]) >= tol){
      return false;
    }
  }
  return true;
}
