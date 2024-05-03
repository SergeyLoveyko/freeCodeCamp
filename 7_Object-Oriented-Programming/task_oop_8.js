//  8. - Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(3);

myHouse instanceof House                      //  true
console.log( myHouse instanceof House );