//  8. - Implement map on a Prototype

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el, idx, originArray) => 
      newArray.push(callback(el, idx, originArray)))
  // Only change code above this line
  return newArray;
};