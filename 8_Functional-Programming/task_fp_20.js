//  20. - Combine an Array into a String Using the join Method

function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/).join(" ")

  // Only change code above this line
}

console.log( sentensify("May-the-force-be-with-you") );           //  May the force be with you
console.log( sentensify("The.force.is.strong.with.this.one") );   //  The force is strong with this one
console.log( sentensify("There,has,been,an,awakening") );         //  There has been an awakening