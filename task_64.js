//  64. - Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));            //  "Not Equal"
console.log(testStrictNotEqual(17));            //  "Equal"
console.log(testStrictNotEqual("17"));          //  "Not Equal"
console.log(testStrictNotEqual(12));            //  "Not Equal"
console.log(testStrictNotEqual("bob"));         //  "Not Equal"