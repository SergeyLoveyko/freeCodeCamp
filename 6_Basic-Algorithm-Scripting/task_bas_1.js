//  1. - Convert Celsius to Fahrenheit

function convertToF(celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(convertToF(-30));        //  -22
console.log(convertToF(-10));        //  14
console.log(convertToF(0));          //  32
console.log(convertToF(20));         //  68
console.log(convertToF(30));         //  86