//  63. - Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));              //  Not Equal
console.log(testNotEqual(99));              //  Equal
console.log(testNotEqual("99"));            //  Equal
console.log(testNotEqual(12));              //  Not Equal
console.log(testNotEqual("12"));            //  Not Equal
console.log(testNotEqual("bob"));           //  Not Equal