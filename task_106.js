//  106. - Generate Random Whole Numbers with JavaScript

function randomWholeNum() {

  // Only change code below this line

    const rend = Math.random();
    console.log(rend);
    return Math.floor(rend * 10);
}

console.log(randomWholeNum());