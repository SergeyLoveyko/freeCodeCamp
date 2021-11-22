//  91. - Testing Objects for Properties

function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  // Only change code above this line
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));    //  "pony"
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));     //  "kitten"
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));   //  Not Found
console.log(checkObj({city: "Seattle"}, "city"));                               //  "Seattle"
console.log(checkObj({city: "Seattle"}, "district"));                           //  Not Found
console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));                  //  Not Found