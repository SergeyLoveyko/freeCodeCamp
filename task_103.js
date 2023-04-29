//  103. - Replace Loops using Recursion

// let total = 0;

function sum(arr, n) {
  // Only change code below this line

  // if (arr[n - 1] == undefined) {
  //   return  total;
  // } else {
  //   total += arr[n - 1];
  //   n--;
  //   sum(arr, n);
  // }

  // return total;

  
    if (arr[n - 1] == undefined) {
    return 0;
  } else {
    return arr[n - 1] + sum(arr, n - 1);
  }

  // Only change code above this line
}

console.log(sum([1], 0));                //  0
console.log(sum([2, 3, 4], 1));          //  2
console.log(sum([2, 3, 4, 5], 3));       //  9