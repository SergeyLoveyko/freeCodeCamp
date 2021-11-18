//  66. - Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(0));         //  Less than 10
console.log(testGreaterOrEqual(9));         //  Less than 10
console.log(testGreaterOrEqual(10));        //  10 or Over
console.log(testGreaterOrEqual(11));        //  10 or Over
console.log(testGreaterOrEqual(19));        //  10 or Over
console.log(testGreaterOrEqual(100));       //  20 or Over
console.log(testGreaterOrEqual(21));        //  20 or Over