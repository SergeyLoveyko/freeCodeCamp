//  76. - Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta"
    }
    // Only change code above this line
    return answer;
}

console.log(caseInSwitch(1));   //  alpha
console.log(caseInSwitch(2));   //  beta
console.log(caseInSwitch(3));   //  gamma
console.log(caseInSwitch(4));   //  delta