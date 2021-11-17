//  62. - Practice comparing different values

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));     //  "Not Equal"
console.log(compareEquality("20", 20));     //  "Not Equal"