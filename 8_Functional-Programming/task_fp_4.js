//  4. - Avoid Mutations and Side Effects Using Functional Programming

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

  return fixedValue + 1;

  // Only change code above this line
}

let newValue = incrementer();
console.log( newValue );            //  5
console.log( fixedValue );          //  4