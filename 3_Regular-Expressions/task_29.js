//  30. - Positive and Negative Lookahead

function regExp(str) {
    let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
    let result = pwRegex.test(str);

    return result;
}

console.log(regExp("astronaut"));              //  false
console.log(regExp("banan1"));                 //  false
console.log(regExp("bana12"));                 //  true
console.log(regExp("abc123"));                 //  true
console.log(regExp("12345"));                  //  false
console.log(regExp("8pass99"));                //  true
console.log(regExp("1a2bcde"));                //  false
console.log(regExp("astr1on11aut"));           //  true