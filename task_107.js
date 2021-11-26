//  107. - Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

console.log(randomRange(2, 6));
console.log(randomRange(1, 9));
console.log(randomRange(3, 15));