//  70. - Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(0));     //  "Outside"
console.log(testLogicalOr(9));     //  "Outside"
console.log(testLogicalOr(10));     //  "Inside"
console.log(testLogicalOr(15));     //  "Inside"
console.log(testLogicalOr(19));     //  "Inside"
console.log(testLogicalOr(20));     //  "Inside"
console.log(testLogicalOr(21));     //  "Outside"
console.log(testLogicalOr(25));     //  "Outside"