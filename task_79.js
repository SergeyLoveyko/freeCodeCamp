//  79. - Replacing If Else Chains with Switch

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        default:
            answer = "";
            break;
    }
    // Only change code above this line
    return answer;
}

console.log(chainToSwitch("bob"));      //  Marley
console.log(chainToSwitch(42));         //  The Answer
console.log(chainToSwitch(1));          //  There is no #1
console.log(chainToSwitch(99));         //  Missed me by this much!
console.log(chainToSwitch(7));          //  Ate Nine
console.log(chainToSwitch("John"));     //  Ate Nine
console.log(chainToSwitch(156));        //  ""