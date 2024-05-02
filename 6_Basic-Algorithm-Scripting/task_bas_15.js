//  12. - Mutations

function mutation(arr) {
  const target = arr[0].toLowerCase().split('');
  const test = arr[1].toLowerCase().split('');

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false
  }
  return true
}

console.log(mutation(["hello", "hey"]));                //    false
console.log(mutation(["hello", "Hello"]));              //    true
console.log(mutation(["Alien", "line"]));               //    true
console.log(mutation(["floor", "for"]));                //    true
console.log(mutation(["hello", "neo"]));                //    false
console.log(mutation(["voodoo", "no"]));                //    false
console.log(mutation(["ate", "date"]));                 //    false
console.log(mutation(["Tiger", "Zebra"]));              //    false
console.log(mutation(["Noel", "Ole"]));                 //    true