//  10. - Sorted Union

function uniteUnique(...arr) {

  return arr.reduce((acc, item) => acc.concat(item))
    .filter((el, idx, attackArr) => attackArr.indexOf(el) == idx)

}

console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) );
//  [1, 3, 2, 5, 4]

console.log( uniteUnique([1, 2, 3], [5, 2, 1]) );
//  [1, 2, 3, 5]

console.log( uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) );
//  [1, 2, 3, 5, 4, 6, 7, 8]

console.log( uniteUnique([1, 3, 2], [5, 4], [5, 6]) );
//  [1, 3, 2, 5, 4, 6]

console.log( uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) );
//  [1, 3, 2, 5, 4]
