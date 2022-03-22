//  9. - Finders Keepers +

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));           //  2
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));    //  8
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));           //  undefined