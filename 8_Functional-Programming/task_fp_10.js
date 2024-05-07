//  10. - Implement the filter Method on a Prototype


// my helper code
function Array() {};
Array.prototype = [23, 65, 98, 5, 13];                        //   position 1
// Array.prototype = ["naomi", "quincy", "camperbot"];        //   position 2
// Array.prototype = [1, 1, 2, 5, 2];                         //   position 3

Array.prototype.showArray = function() {
  let result = [];
  this.forEach(el => result.push(el))
  console.log( result );
}
// my helper code



Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // for (let i = 0; i < this.length; i++) {
  //   if (callback(this[i], i, array) == true) {
  //     newArray.push(this[i])
  //   }
  // }

  this.forEach((el, idx, array) => {
    if (callback(el, idx, array) == true) {
      newArray.push(el)
    }
  })

  return newArray;
};


// my helper code
const prop = new Array();
prop.showArray();
prop.myFilter(item => item % 2);                                                  //   position 1
// prop.myFilter(element => element === "naomi");                                 //   position 2
// prop.myFilter((element, index, array) => array.indexOf(element) === index);    //   position 3
// my helper code
