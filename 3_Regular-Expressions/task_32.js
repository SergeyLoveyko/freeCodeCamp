//  32. - Reuse Patterns Using Capture Groups

function regExp(str) {
    let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
    let result = reRegex.test(str);

    return result;
}

console.log(regExp("42 42 42"));             //  true
console.log(regExp("100 100 100"));          //  true
console.log(regExp("42 42 42 42"));          //  false
console.log(regExp("42 42"));                //  false
console.log(regExp("1 2 3"));                //  false
console.log(regExp("10 10 10"));             //  true