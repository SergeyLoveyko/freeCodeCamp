//  109. - Use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));         //  a number
console.log(convertToInteger("10011"));         //  19
console.log(convertToInteger("111001"));        //  57
console.log(convertToInteger("JamesBond"));     //  NaN
