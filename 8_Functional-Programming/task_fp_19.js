//  19. - Split a String into an Array Using the split Method

function splitify(str) {
  // Only change code below this line

  return str.split(/\W/);

  // Only change code above this line
}

console.log( splitify("Hello World,I-am code") );     //  [ 'Hello', 'World', 'I', 'am', 'code' ]
console.log( splitify("Earth-is-our home") );         //  [ 'Earth', 'is', 'our', 'home' ]
console.log( splitify("This.is.a-sentence") );        //  [ 'This', 'is', 'a', 'sentence' ]