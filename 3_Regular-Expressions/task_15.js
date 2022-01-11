//  15. - Find One or More Criminals in a Hunt

function regExp(str) {
    let reCriminals = /C+/; // Change this line
    const result = str.match(reCriminals);

    return result;
}

console.log(regExp("C"));                   //  "C"
console.log(regExp("CC"));                  //  "CC"
console.log(regExp("P1P5P4CCCcP2P6P3"));    //  "CCC"
console.log(regExp("P6P2P7P4P5CCCCCP3P1"));    //  "CCCCC"
console.log(regExp(""));                    //  ""
console.log(regExp("P1P2P3"));              //  ""
console.log(regExp("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"));              //  "C" => 50