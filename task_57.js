//  57. - Stand in Line

function nextInLine(arr, item) {
     // Only change code below this line
    arr.push(item);
    const newItem = arr.shift();
    return newItem;
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));                //  1
console.log("After: " + JSON.stringify(testArr));