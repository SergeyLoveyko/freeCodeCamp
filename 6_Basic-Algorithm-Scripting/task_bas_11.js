//  11. - Title Case a Sentence +

function titleCase(str) {
    // return str.toLowerCase().split(/\s+/)
    //             .map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    return str.toLowerCase().replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot"));                 //  I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));                      //  Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));   //  Here Is My Handle Here Is My Spout