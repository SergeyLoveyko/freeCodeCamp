//  2. - Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  const a = s.pop();
  s.unshift(a);
}
editInPlace();

console.log(s);     //  s = [2, 5, 7]