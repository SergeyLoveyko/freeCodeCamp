//  71. - Introducing Else Statements

function testElse(val) {
  let result = "";
  // Only change code below this line
  if (val >= 6) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}

console.log(testElse(4));       //  5 or Smaller
console.log(testElse(5));       //  5 or Smaller
console.log(testElse(6));       //  Bigger than 5
console.log(testElse(10));      //  Bigger than 5