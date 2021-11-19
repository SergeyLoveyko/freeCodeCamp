//  73. - Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));       //  Less than 5
console.log(orderMyLogic(6));       //  Less than 10
console.log(orderMyLogic(11));      //  Greater than or equal to 10