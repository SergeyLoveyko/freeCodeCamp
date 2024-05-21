//  13. - Sum All Primes

function sumPrimes(max) {
  let arr = [];

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  
  function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) arr.push(i);
    }
  }

  printPrimes(max);

  return arr.filter(item => Number.isInteger(item)).reduce((sum, el) => sum + el, 0);
}

console.log( sumPrimes(10) );       //  it is number
console.log( sumPrimes(10) );       //  17
console.log( sumPrimes(977) );      //  73156