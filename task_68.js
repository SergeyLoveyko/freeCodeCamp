//  68. - Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(0));   //  Smaller Than or Equal to 12
console.log(testLessOrEqual(11));   //  Smaller Than or Equal to 12
console.log(testLessOrEqual(12));   //  Smaller Than or Equal to 12
console.log(testLessOrEqual(23));   //  Smaller Than or Equal to 24
console.log(testLessOrEqual(24));   //  Smaller Than or Equal to 24
console.log(testLessOrEqual(25));   //  More Than 24
console.log(testLessOrEqual(55));   //  More Than 24