//  1. - Sum All Numbers in a Range

function sumAll(arr) {

  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  let count = 0;

  for (let i = minNum; i <= maxNum; i++) {
    count += i;
  }

  return count;
}

console.log( sumAll([1, 4]) );      //  10
console.log( sumAll([4, 1]) );      //  10
console.log( sumAll([5, 10]) );     //  45
console.log( sumAll([10, 5] ))      //  45