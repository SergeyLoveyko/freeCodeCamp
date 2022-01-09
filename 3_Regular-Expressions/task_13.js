//  13. - Match Characters that Occur Zero or More Times

function regExp(str) {
    
    // Only change code below this line
    let chewieRegex = /Aa*/; // Change this line
    // Only change code above this line
    let result = str.match(chewieRegex);

    return result;
}

console.log(regExp("A"));
console.log(regExp("Aaaaaaaaaaaaaaaarrrgh!"));
console.log(regExp("He made a fair move. Screaming about it can't help you."));
console.log(regExp("Let him have it. It's not wise to upset a Wookiee."));