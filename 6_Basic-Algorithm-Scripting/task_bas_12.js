//  12. - Slice and Splice

function frankenSplice(arr1, arr2, n) {
    // const newArr = arr2.slice();
    // newArr.splice(n, 0, ...arr1);
    // return newArr;

    const newArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i]);
        n++;
    }
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));        //  [4, 1, 2, 3, 5, 6]
console.log(frankenSplice([1, 2], ["a", "b"], 1));          //  ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2, 3], [4, 5], 1));           //  [4, 1, 2, 3, 5]