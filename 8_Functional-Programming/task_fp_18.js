//  18. - Return a Sorted Array Without Changing the Original Array

const globalArrayOne = [5, 6, 3, 2, 9];
const globalArrayTwo = [1, 30, 4, 21, 100000];
const globalArrayThree = [140000, 104, 99];

function nonMutatingSort(arr) {
  // Only change code below this line

  return [...arr].sort((a, b) => a - b);

  // Only change code above this line
}

console.log( nonMutatingSort(globalArrayOne) );       //  [ 2, 3, 5, 6, 9 ]
console.log( nonMutatingSort(globalArrayTwo) );       //  [ 1, 4, 21, 30, 100000 ]
console.log( nonMutatingSort(globalArrayThree) );     //  [ 99, 104, 140000 ]