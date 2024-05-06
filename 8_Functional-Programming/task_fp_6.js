//  6. - Refactor Global Variables Out of Functions

// The global variable
const bookList = [
  "The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
  "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"
];

// Change code below this line
function add(array, bookName) {

  let arrayClone = [...array];
  arrayClone.push(bookName);
  return arrayClone;
  
  // Change code above this line
}

// Change code below this line
function remove(array, bookName) {
  let newArray = [...array];
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    // Change code above this line
    }
}

// const addBookName = add(bookList, "A Brief History of Time")


console.log( add(bookList, "A Brief History of Time") );
// [
// "The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
// "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", 
// "A Brief History of Time"
// ]
console.log( "remove: ", remove(bookList, "On The Electrodynamics of Moving Bodies") );
// [
// "The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica",
// "Disquisitiones Arithmeticae"
// ]
console.log( remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies") );
// [
// "The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica",
// "Disquisitiones Arithmeticae", "A Brief History of Time"
// ]