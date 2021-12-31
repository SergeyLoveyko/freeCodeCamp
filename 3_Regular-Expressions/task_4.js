//  4. - Ignore Case While Matching

function regExp(str) {
    let myString = "freeCodeCamp";
    let fccRegex = /FreeCodeCamp/i; // Change this line
    let result = fccRegex.test(str);

    return result;
}
    

console.log(regExp("freeCodeCamp"));        //  true
console.log(regExp("FreeCodeCamp"));        //  true
console.log(regExp("FreecodeCamp"));        //  true
console.log(regExp("FreeCodecamp"));        //  true
console.log(regExp("Free Code Camp"));      //  false
console.log(regExp("FreeCOdeCamp"));        //  true
console.log(regExp("FCC"));                 //  false
console.log(regExp("FrEeCoDeCamp"));         //  true
console.log(regExp("FrEeCodECamp"));         //  true
console.log(regExp("FReeCodeCAmp"));         //  true