//  81. - Return Early Pattern for Functions

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }



    // Only change code above this line

     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));       //  a number
console.log(abTest(2,2));       //  8
console.log(abTest(-2,2));      //  undefined
console.log(abTest(2,-2));      //  undefined
console.log(abTest(2,8));       //  undefined
console.log(abTest(3,3));       //  12
console.log(abTest(0,0));       //  0