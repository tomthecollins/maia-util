import intersection_hash from './intersection_hash'

// const child_process = require('child_process')
// const numchild = require('os').cpus().length
// console.log("numchild:", numchild)

// const myD = [
//   [1, 1, 4], [1, 3, 5], [2, 1, 1], [2, 2, 6], [2, 3, 2], [3, 2, 3],
//   [6, 1, 4], [6, 3, 5], [7, 1, 1], [7, 2, 6], [7, 3, 2], [8, 2, 3],
//   [11, -1, 4], [11, 0, 1], [11, 0, 9], [11, 1, 5]
// ]
// const myD = [[0, 64], [1+1/3, 62], [1+2/3, 68], [3, 66]]
//
// siar(myD, 2)

// export default
export default function siar(D, r = 1){
  // Tom Collins 31/01/2022.
  // In
  // D Array mandatory
  // r Integer optional
  // Out Array
  // This function calculates the structure induction algorithm over r
  // superdiagonals (SIAR, Collins, 2011).
  // It is assumed that the point set D is in lexicograhic order.
  // The implementation utilises a hash table, and is accurate to within 1e-5.

  const n = D.length
  // Checking for input errors with regards to r.
  if (Math.floor(r) !== r || r <= 0){
    console.log("r should be a positive integer. Returning.")
    return
  }
  if (r >= n){
    console.log("r should be less than D.length, and ideally small. Setting r = 1.")
    r = 1
  }

  // Hash to store the difference vectors and associated indices.
  const V = {}
  for (let i = 0; i < r; i++){
    for (let j = i + 1; j < n; j++){
      // console.log("j:", j, "j - i - 1:", j - i - 1)
      const hash = D[j].map(function(djk, k){
        // Calculate difference rounded to 5 d.p. and convert to string.
        return (Math.round(100000*(djk - D[j - i - 1][k]))/100000).toString()
      }).toString()
      if (V[hash] === undefined){
        V[hash] = [j - i - 1]
      }
      else {
        V[hash].push(j - i - 1)
      }
    }
  }
  // console.log("V:", V)

  // Run SIA on a value of V if it contains more than one datapoint, recording
  // the results in one hash table L.
  const L = {}
  const ndim = D[0].length
  Object.keys(V).forEach(function(k){
    if (V[k].length > 1){
      let sidx
      if (r === 1){ // Indices will be in ascending order.
        sidx = V[k]
      }
      else { // Should sort the indices, because they won't necessarily be in ascending order.
        sidx = V[k].sort()
      }
      sidx.forEach(function(i){
        sidx.forEach(function(j){
          if (j > i){
            let hash = []
            for (let dim = 0; dim < ndim; dim++){
              hash[dim] = Math.round(100000*(D[j][dim] - D[i][dim]))/100000
            }
            const hashAsStr = hash.join(",")

            // console.log("hash", hash_x, hash_y)
            if (L[hashAsStr] === undefined){
              L[hashAsStr] = {"cnt":1, "hash": hash}
            }
            else {
              L[hashAsStr].cnt++
            }

          }
        })
      })
    }
  })
  // console.log("L:", L)
  const lByFreq = Object.keys(L).sort(function(a, b){
    return L[b].cnt - L[a].cnt
  })
  // console.log("lByFreq:", lByFreq)

  // Hash D.
  let Dh
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
  // console.log("Dh:", Dh)

  // This is the bit that could be parallelised.
  let outputMTP = []
  lByFreq.forEach(function(vecAsStr){
  // Object.keys(L).forEach(function(vecAsStr){
    const vec = L[vecAsStr].hash
    const Dmv = D.map(function(d){
      return d.map(function(dk, k){
        return dk - vec[k]
      })
    })
    // console.log("Dmv:", Dmv)
    outputMTP.push({
      "vector": vec,
      "MTP": intersection_hash(Dmv, Dh)
    })
  })
  return outputMTP
}

// Here is some code for parallelising Node.
// From https://stackoverflow.com/questions/20004935/best-way-to-execute-parallel-processing-in-node-js
// const child_process = require('child_process')
// const numchild = require('os').cpus().length
// console.log("numchild:", numchild)
// var done      = 0;
//
// for (var i = 0; i < numchild; i++){
//   var child = child_process.fork('./child');
//   child.send((i + 1) * 1000);
//   child.on('message', function(message) {
//     console.log('[parent] received message from child:', message);
//     done++;
//     if (done === numchild) {
//       console.log('[parent] received all results');
//       ...
//     }
//   });
// }
//
// // child.js
// process.on('message', function(message) {
//   console.log('[child] received message from server:', message);
//   setTimeout(function() {
//     process.send({
//       child   : process.pid,
//       result  : message + 1
//     });
//     process.disconnect();
//   }, (0.5 + Math.random()) * 5000);
// });
