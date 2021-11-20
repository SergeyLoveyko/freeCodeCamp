//  77. - Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }


    // Only change code above this line
    return answer;
}

console.log(switchOfStuff("a"));    //  apple
console.log(switchOfStuff("b"));    //  bird
console.log(switchOfStuff("c"));    //  cat
console.log(switchOfStuff("d"));    //  stuff
console.log(switchOfStuff(4));      //  stuff