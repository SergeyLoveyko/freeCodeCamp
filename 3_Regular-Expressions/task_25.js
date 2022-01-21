//  25. - Specify Upper and Lower Number of Matches

function regExp(str) {
    let ohRegex = /0h{3,6}\sno/; // Change this line
    let result = ohRegex.test(str);

    return result;
}

console.log(regExp("Ohh no"));              //  
console.log(regExp("Ohhh no"));             //           
console.log(regExp("Ohhhh no"));            //  
console.log(regExp("Ohhhhh no"));           //  
console.log(regExp("Ohhhhhh no"));          //  
console.log(regExp("Ohhhhhhh no"));         //  