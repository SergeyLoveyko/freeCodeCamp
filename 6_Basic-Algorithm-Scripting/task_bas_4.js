//  4. - Find the Longest Word in a String

function findLongestWordLength(str) {
    const res = str.split(' ').sort(function(a, b) {
        return b.length - a.length;
    });

    return res[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));                 //  6
console.log(findLongestWordLength("May the force be with you"));                                    //  5
console.log(findLongestWordLength("Google do a barrel roll"));                                      //  6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));  //  8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //  19
