//  111. - Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
        : "zero";
}

console.log(checkSign(10));          //  string positive
console.log(checkSign(-12));         //  string negative
console.log(checkSign(0));           //  zero
