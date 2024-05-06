//  5. - Pass Arguments to Avoid External Dependence in a Function

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {

  return value + 1;

  // Only change code above this line
}

let differentValue = incrementer(fixedValue);
console.log( differentValue );                      //  Should equal 5
console.log( fixedValue );                          //  Should equal 4