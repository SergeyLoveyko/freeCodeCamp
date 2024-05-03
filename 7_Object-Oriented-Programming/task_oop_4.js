//  4. - Make Code More Reusable with the this Keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  // Only change code below this line
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
  // Change the code only above this line
};

dog.sayLegs();