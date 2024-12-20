const mu = require("./../../dist/index")


// const ans = mu.intersection([[1, 2]], [[3, 4]])
//
// if(ans){
//   console.log("Truthiness of [] is true.")
// }
// else{
//   console.log("Truthiness of [] is false.")
// }
//
// return

const D = [[5, 6], [5, 7], [6, 7], [7, 8], [8, 5], [8, 7], [8, 9], [9, 7],
  [9, 8], [10, 8], [12, 6], [12, 8], [12, 10], [13, 5], [13, 9], [14, 7],
  [15, 5], [15, 7], [15, 10], [16, 6]]
const P = [[10, 8], [12, 8], [12, 10], [13, 9]]
const Q = [[5, 6], [16, 6]]
const hash = false

const ans1 = mu.translators(P, D, hash)
console.log("ans1:", ans1)
// Answer should be [[-4, -1], [0, 0], [3, -3]].

// After one pass:
// Indices into members of E = p_1 + D - p_0: 2, 3, 9, 13
// [ [ 8, 7 ], [ 9, 8 ], [ 12, 8 ], [ 15, 5 ] ]

const ans1Q = mu.translators(Q, D, hash)
console.log("ans1Q:", ans1Q)


const ans2 = mu.translators([[6, 7]], D, hash)
console.log("ans2:", ans2)


const ans3 = mu.translators(D, D, hash)
console.log("ans3:", ans3)

// Make a large, sparse, 3D dataset. Embed with 4-5 instances of a pattern, and
// test translators(P, D).
// Background set
const n = 20000
const min = 0
const max = 10000
let D2 = []
for (let i = 0; i < n; i++){
  const d = []
  for (let k = 0; k < 3; k++){
    d.push(
      mu.get_random_int_inclusive(min, max)
    )
  }
  D2.push(d)
}
// Define and push copies of pattern.
const P2 = [[10, 8, 9], [12, 8, 9], [12, 10, 12], [13, 9, 10], [13, 14, 10]]
const t2 = [[0, 0, 0], [2000, 2000, 2000], [8000, 8001, 8002]]
t2.forEach(function(tr){
  P2.map(function(p){
    const sum = p.map(function(val, idx){
      return val + tr[idx]
    })
    D2.push(sum)
  })
})
D2 = mu.unique_rows(D2, true)[0]
// console.log("D2:", D2)

const ans4 = mu.translators(P2, D2, hash)
console.log("ans4:", ans4)


// Make a much larger pattern to test scalability.
const n2 = 20000
const min2 = 0
const max2 = 10000
let D3 = []
for (let i = 0; i < n; i++){
  const d = []
  for (let k = 0; k < 3; k++){
    d.push(
      mu.get_random_int_inclusive(min2, max2)
    )
  }
  D3.push(d)
}
// Define and push copies of pattern.
const n3 = 500
const min3 = 0
const max3 = 2000
let P3 = []
for (let i = 0; i < n; i++){
  const d = []
  for (let k = 0; k < 3; k++){
    d.push(
      mu.get_random_int_inclusive(min3, max3)
    )
  }
  P3.push(d)
}
const t3 = [[0, 0, 0], [1000, 2000, 3000], [2000, 8000, -800]]
t3.forEach(function(tr){
  P3.map(function(p){
    const sum = p.map(function(val, idx){
      return val + tr[idx]
    })
    D3.push(sum)
  })
})
D3 = mu.unique_rows(D3, true)[0]

const ans5 = mu.translators(P3, D3, hash)
console.log("ans5:", ans5)









//
