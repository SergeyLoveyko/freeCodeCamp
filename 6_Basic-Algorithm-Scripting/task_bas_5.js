//  5. - Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        res.push(Math.max.apply(null, arr[i]));
    }
    return res;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));       //  [ 5, 27, 39, 1001 ]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));    //  [ 9, 35, 97, 1000000 ]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));     //  [ 25, 48, 21, -3 ]