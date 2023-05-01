//  113. - Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {

  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }

};

console.log( rangeOfNumbers(1, 5) );        //  return [1, 2, 3, 4, 5]
console.log( rangeOfNumbers(6, 9) );        //  return [6, 7, 8, 9]
console.log( rangeOfNumbers(4, 4) );        //  return [4]