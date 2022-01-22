//  26. - Specify Only the Lower Number of Matches

function regExp(str) {
    let haStr = "Hazzzzah";
    let haRegex = /Haz{4,}ah/; // Change this line
    let result = haRegex.test(str);

    return result;
}

console.log(regExp("Hazzah"));              //  false
console.log(regExp("Hazzzah"));             //  false       
console.log(regExp("Hazzzzah"));            //  true
console.log(regExp("Hazzzzzah"));           //  true
console.log(regExp("Hazzzzzzah"));          //  true

