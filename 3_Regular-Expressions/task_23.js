//  23. - Match Whitespace

function regExp(str) {
    let countWhiteSpace = /\s/g; // Change this line
    let result = str.match(countWhiteSpace);

    return result;
}

console.log(regExp("Men are from Mars and women are from Venus."));     //  8
console.log(regExp("Space: the final frontier."));                      //  3
console.log(regExp("MindYourPersonalSpace"));                           //  0
