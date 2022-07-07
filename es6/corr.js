import mean from './mean'

export default function corr(x, y){
  // Tom Collins 8/11/2015.
  // In
  // x Array mandatory
  // y Array mandatory
  // Out Number
  // This function calculates the Pearson product-moment correlation
  // coefficient between the input arrays x and y. It checks that the arrays
  // are of the same length, but does not check that they each consist of
  // numbers, nor for zero divisors (output NaN in both cases).

  var n = x.length;
  if (n !== y.length){
    throw "Error in call to corr: input arrays must be of the same length.";
  }
  else{
    var x_bar = mean(x);
    var y_bar = mean(y);
    var x2 = 0;
    var y2 = 0;
    var xy = 0;
    for (let i = 0; i < x.length; i++){
      x2 += Math.pow(x[i], 2);
      y2 += Math.pow(y[i], 2);
      xy += x[i]*y[i];
    }
    var r = (xy - n*x_bar*y_bar)/
      (Math.sqrt(x2 - n*Math.pow(x_bar, 2))*Math.sqrt(y2 - n*Math.pow(y_bar, 2)));
    return r;
  }
}
