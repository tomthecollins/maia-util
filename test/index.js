const D = [[5, 6], [5, 7], [6, 7], [7, 8], [8, 5], [8, 7], [8, 9], [9, 7],
  [9, 8], [10, 8], [12, 6], [12, 8], [12, 10], [13, 5], [13, 9], [14, 7],
  [15, 5], [15, 7], [15, 10], [16, 6]]

Dh = {}
D.map(function(d, idx){
  const hash = d.map(function(val){
    // Calculate difference rounded to 5 d.p. and convert to string.
    return (Math.round(100000*(val))/100000).toString()
  }).toString()
  if (Dh[hash] === undefined){
    Dh[hash] = idx
  }
  else {
    console.log("Error: non-unique entry in D!")
    return
  }
})

console.log("Dh:", Dh)
