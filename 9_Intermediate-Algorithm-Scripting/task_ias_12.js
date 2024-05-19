//  12. - Sum All Odd Fibonacci Numbers

function sumFibs(num) {

  let fibonacci = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibonacci[i] = (fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
  }

  console.log( "-------------------" );
  return fibonacci.filter(item => item % 2 == 1 && item <= num).reduce((sum, el) => sum += el);

}

console.log( sumFibs(4) );        //  5
console.log( sumFibs(10) );       //  10
console.log( sumFibs(1000) );     //  1785
console.log( sumFibs(75024) );    //  60696
console.log( sumFibs(75025) );    //  135721