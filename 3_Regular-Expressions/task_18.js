//  18. - Match All Letters and Numbers

function regExp(str) {
    let alphabetRegexV2 = /\w/g; // Change this line
    let result = str.match(alphabetRegexV2).length;

    return result;
}


console.log(regExp("The five boxing wizards jump quickly."));               //  31
console.log(regExp("Pack my box with five dozen liquor jugs."));            //  32
console.log(regExp("How vexingly quick daft zebras jump!"));                //  30
console.log(regExp("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."));    //  36