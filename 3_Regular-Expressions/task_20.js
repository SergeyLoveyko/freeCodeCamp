//  20. - Match All Numbers

function regExp(str) {
    let numRegex = /\d/g; // Change this line
    let result = str.match(numRegex).length;

    return result;

}

console.log(regExp("9"));                       //  1
console.log(regExp("Catch 22"));                //  2
console.log(regExp("101 Dalmatians"));          //  3
// console.log(regExp("One, Two, Three"));         //  
console.log(regExp("21 Jump Street"));          //  2
console.log(regExp("2001: A Space Odyssey"));   //  4
