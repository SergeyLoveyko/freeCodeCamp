//  69. - Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  // Only change code above this line
  return "No";

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(10));    //    "No"
console.log(testLogicalAnd(24));    //    "No"
console.log(testLogicalAnd(25));    //    "Yes"
console.log(testLogicalAnd(30));    //    "Yes"
console.log(testLogicalAnd(50));    //    "Yes"
console.log(testLogicalAnd(51));    //    "No"
console.log(testLogicalAnd(75));    //    "No"
console.log(testLogicalAnd(80));    //    "No"

