//  60. - Comparison with the Equality Operator

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));          //  "Not Equal"
console.log(testEqual(12));          //  "Equal"
console.log(testEqual("12"));        //  "Equal"