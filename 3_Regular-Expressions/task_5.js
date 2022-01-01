//  5. - Extract Matches

function regExp() {
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/g; // Change this line
    let result = extractStr.match(codingRegex); // Change this line

    return result;
}

console.log(regExp());      //  'coding'
