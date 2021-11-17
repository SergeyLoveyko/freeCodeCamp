//  61. - Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));         //  "Not Equal"
console.log(testStrict(7));          //  "Equal"
console.log(testStrict("7"));        //  "Not Equal"
