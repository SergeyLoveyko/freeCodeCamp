//  74. - Chaining If Else Statements

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }

    return "Change Me";
    // Only change code above this line
}

console.log(testSize(0));       //      Tiny
console.log(testSize(4));       //      Tiny
console.log(testSize(5));       //      Small
console.log(testSize(8));       //      Small
console.log(testSize(10));      //      Medium
console.log(testSize(14));      //      Medium
console.log(testSize(15));      //      Large
console.log(testSize(17));      //      Large
console.log(testSize(20));      //      Huge
console.log(testSize(25));      //      Huge