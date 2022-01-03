//  7. - Match Anything with Wildcard Period

function regExp(str) {
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; // Change this line
    let result = unRegex.test(str);

    return result;
}


console.log(regExp('Let us go on a run.'));     //  true
console.log(regExp('The sun is out today.'));   //  true
console.log(regExp('Coding is a lot of fun.')); //  true
console.log(regExp('Seven days without a pun makes one weak.'));    //  true
console.log(regExp('One takes a vow to be a nun.'));    //  true
console.log(regExp('She got fired from the hot dog stand for putting her hair in a bun.'));    //  true
console.log(regExp('There is a bug in my code.'));    //  false
console.log(regExp('Catch me if you can.'));    //  false