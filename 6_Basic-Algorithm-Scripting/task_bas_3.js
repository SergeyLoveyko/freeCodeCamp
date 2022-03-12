//  3. - Factorialize a Number

function factorialize(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}

console.log(factorialize(5));        //  120
console.log(factorialize(10));       //  3628800
console.log(factorialize(20));       //  2432902008176640000
console.log(factorialize(0));        //  1

//  +