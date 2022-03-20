//  7. - Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    let resStr = "";
    for (let i = 0; i < num; i++) {
        resStr += str
    }
    return resStr;
}

console.log(repeatStringNumTimes("*", 3));       //  "***"
console.log(repeatStringNumTimes("abc", 3));     //  abcabcabc
console.log(repeatStringNumTimes("abc", 4));     //  abcabcabcabc
console.log(repeatStringNumTimes("abc", 1));     //  abc
console.log(repeatStringNumTimes("*", 8));       //  "********"
console.log(repeatStringNumTimes("abc", -2));    //  ""
console.log(repeatStringNumTimes("abc", 0));     //  ""