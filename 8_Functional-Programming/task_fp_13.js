//  13. - Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);         // add this line

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);