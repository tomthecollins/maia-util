const mu = require("./../../dist/index")

let patt3 = [
    [
      4,
      60,
      "C4",
      0.5
    ],
    [
      4,
      62,
      "E4",
      0.5
    ],
    [
      5.33333,
      69,
      "E5",
      0.16666666666666666
    ],
    [
      5.5,
      59,
      "B3",
      0.5
    ],
    [
      5.83333,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      5.83333,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      5.83333333332,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      6.5,
      67,
      "C5",
      0.5
    ]
  ]
let patt4 = [
    [
      4,
      60,
      "C4",
      0.5
    ],
    [
      4,
      62,
      "E4",
      0.5
    ],
    [
      5.33333,
      69,
      "E5",
      0.16666666666666666
    ],
    [
      5.5,
      59,
      "B3",
      0.5
    ],
    [
      5.83333,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      5.83333,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      6.5,
      67,
      "C5",
      0.5
    ]
  ]

let cs3and4 = cardinality_similarity(patt3, patt4)
console.log("cardinality_similarity of Patt3 and Patt4", cs3and4)


// const a = mu.unique_rows(patt3, true)[0]
// console.log("a:", a)
//
// const b = mu.unique_rows(patt4, true)[0]
// console.log("b:", b)
//
// cs = mu.cardinality_score(a, b)
// console.log("cs:", cs)



let patt6 = [
    [
      76.5,
      66,
      "B4",
      0.16666666666666666
    ],
    [
      76.75,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      76.83333,
      71,
      "G5",
      0.16666666666666666
    ],
    [
      77,
      60,
      "C4",
      0.16666666666666666
    ],
    [
      77.16667,
      62,
      "E4",
      0.16666666666666666
    ],
    [
      77.33333,
      64,
      "G4",
      0.16666666666666666
    ]
  ]
let patt31 = [
    [
      76.5,
      66,
      "B4",
      0.16666666666666666
    ],
    [
      76.75,
      68,
      "D5",
      0.16666666666666666
    ],
    [
      76.83333,
      71,
      "G5",
      0.16666666666666666
    ],
    [
      77,
      60,
      "C4",
      0.16666666666666666
    ]
  ]

let cs6and31 = cardinality_similarity(patt6, patt31)
console.log("cardinality_similarity of Patt6 and Patt31", cs6and31)




function cardinality_similarity(query, lookup){
  let cs = 0
  if (query.length > 0 && lookup.length > 0) {
    const a = mu.unique_rows(
        query, true
    )[0]
    const b = mu.unique_rows(
        lookup, true
    )[0]
    cs = mu.cardinality_score(a, b)
  }
  return cs[0]*100
}
