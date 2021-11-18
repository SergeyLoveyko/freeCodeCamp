//  67. - Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(0));       //  Under 25
console.log(testLessThan(24));      //  Under 25
console.log(testLessThan(25));      //  Under 55
console.log(testLessThan(54));      //  Under 55
console.log(testLessThan(55));      //  55 or Over
console.log(testLessThan(99));      //  55 or Over