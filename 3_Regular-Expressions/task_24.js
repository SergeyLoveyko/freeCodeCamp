//  24. - Match Non-Whitespace Characters

function regExp(str) {
    let countNonWhiteSpace = /\S/g; // Change this line
    let result = str.match(countNonWhiteSpace);

    return result.length;

}

console.log(regExp("Whitespace is important in separating words"));     //  38
console.log(regExp("Men are from Mars and women are from Venus."));     //  35         
console.log(regExp("Space: the final frontier."));                      //  23
console.log(regExp("21 Jump StreMindYourPersonalSpace"));               //  21