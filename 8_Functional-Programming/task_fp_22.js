//  22. - Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
  // Only change code below this line

  return arr.every(function(value) {
    return value >= 0;
  })

  // Only change code above this line
}

console.log( checkPositive([1, 2, 3, -4, 5]) );     //  false
console.log( checkPositive([1, 2, 3, 4, 5]) );      //  true
console.log( checkPositive([1, -2, 3, -4, 5]) );    //  false