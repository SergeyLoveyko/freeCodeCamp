//  2. - Create a Method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  // Only change code below this line
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs."
  }
  // Change the code only above this line
};

console.log(dog.sayLegs());       //  This dog has 4 legs.