//  16. - Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
  // Only change code below this line
  return arr
      .filter(positiveNum => positiveNum >= 0 && Number
      .isInteger(positiveNum))
      .map(num => Math.pow(num, 2));
  // Only change code above this line
};

console.log( squareList([-3, 4.8, 5, 3, -3.2]) );                             //  [ 25, 9 ]
console.log( squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) );             //  [16, 1764, 36]
console.log( squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) );        //  [9, 100, 49]
