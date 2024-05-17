//  8. - DNA Pairing

function pairElement(str) {
  
  const basePairs = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"]
  }

  let result = [];

  const target = str.split('')

  for (let item of target) {
    result.push(basePairs[item])
  }

  // return result;

  // -----------------------------
  
  // return str.split("").map(item => basePairs[item]);
  //  another variant

}

console.log( pairElement("GCG") );
//  [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

console.log( pairElement("ATCGA") );
//  [ ["A","T"], ["T","A"], ["C","G"], ["G","C"], ["A","T"] ]

console.log( pairElement("TTGAG") );
//  [ ["T","A"], ["T","A"], ["G","C"], ["A","T"], ["G","C"] ]

console.log( pairElement("CTCTA") );
//  [ ["C","G"], ["T","A"], ["C","G"], ["T","A"], ["A","T"] ]
