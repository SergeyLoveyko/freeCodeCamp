//  54. - Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    return "sweater";
  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());        //  "sweater"