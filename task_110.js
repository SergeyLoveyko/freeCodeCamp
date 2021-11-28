//  110. - Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));          //  Not Equal
console.log(checkEqual(1, 1));          //  Equal
console.log(checkEqual(1, -1));         //  Not Equal