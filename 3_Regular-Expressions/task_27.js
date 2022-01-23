//  27. - Specify Exact Number of Matches

function regExp(str) {
    let timRegex = /Tim{4}ber/; // Change this line
    let result = timRegex.test(str);

    return result;
}

console.log(regExp("Timber"));              //  false
console.log(regExp("Timmber"));             //  false       
console.log(regExp("Timmmber"));            //  false
console.log(regExp("Timmmmber"));           //  true
console.log(regExp("Timmmmmber"));          //  false
