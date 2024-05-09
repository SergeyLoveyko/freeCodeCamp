//  17. - Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  // Only change code below this line

  // return arr.sort(function(a, b) {
  //   return a.charCodeAt(0) - b.charCodeAt(0)
  // })

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1
  });

  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));   //  ["a", "a", "c", "d", "g", "z"]
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));   //  ["a", "h", "m", "m", "n", "x"]
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));   //  ["a", "a", "a", "a", "t", "x"]

// my helper code
// [7, 3, 13, 5, 134, 8, 1]
// [3, 7, 5, 13, 8, 1, 134]
// [3, 5, 7, 8, 1, 13, 134]
// [3, 5, 7, 1, 8, 13, 134]
// [3, 5, 1, 7, 8, 13, 134]
// [3, 1, 5, 7, 8, 13, 134]
// [1, 3, 5, 7, 8, 13, 134]
// my helper code