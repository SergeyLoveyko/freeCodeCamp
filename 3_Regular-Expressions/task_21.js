//  21. - Match All Non-Numbers

function regExp(str) {
    let noNumRegex = /\D/g; // Change this line
    let result = str.match(noNumRegex).length;

    return result;

}

// console.log(regExp("9"));                       //  1
console.log(regExp("Catch 22"));                //  6
console.log(regExp("101 Dalmatians"));          //  11
console.log(regExp("One, Two, Three"));         //  15
console.log(regExp("21 Jump Street"));          //  12
console.log(regExp("2001: A Space Odyssey"));   //  17

