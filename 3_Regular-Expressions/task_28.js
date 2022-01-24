//  28.- Check for All or None

function regExp(str) {
    let favRegex = /favou?rite/; // Change this line
    let result = favRegex.test(str);

    return result;
}

console.log(regExp("favorite"));              //  true
console.log(regExp("favou?rite"));            //  true       
console.log(regExp("fav"));                   //  false       