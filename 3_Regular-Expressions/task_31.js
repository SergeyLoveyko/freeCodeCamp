//  31. - Check For Mixed Grouping of Characters

function regExp(str) {
    let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
    let result = myRegex.test(str);
    return result;
}

console.log(regExp("Franklin D. Roosevelt"));           //  true
console.log(regExp("Eleanor Roosevelt"));               //  true
console.log(regExp("Franklin Rosevelt"));               //  false
console.log(regExp("Frank Roosevelt"));                 //  false