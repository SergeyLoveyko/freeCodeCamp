//  24. - Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;     // change this line

  // Only change code below this line
  this.getWeight = function() {
    return weight;
  }
}