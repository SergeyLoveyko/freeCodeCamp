//  3. - Match a Literal String with Different Possibilities

function regExp(str) {
    let petRegex = /dog|cat|bird|fish/; // Change this line
    let result = petRegex.test(str);

    return result;
}

console.log(regExp("John has a pet dog."));         //  true
console.log(regExp("Emma has a pet rock."));        //  false
console.log(regExp("Emma has a pet bird."));        //  true
console.log(regExp("Liz has a pet cat."));          //  true
console.log(regExp("Kara has a pet dolphin."));     //  false
console.log(regExp("Alice has a pet fish."));       //  true
console.log(regExp("Jimmy has a pet computer."));  //  false