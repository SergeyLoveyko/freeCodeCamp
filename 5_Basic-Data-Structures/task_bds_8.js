//  8. - Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
console.log(copyMachine([true, true, null], 1));
console.log(copyMachine(["it works"], 3));