//  9. - Missing letters

function fearNotLetter(str) {

  // ---- my vergin  ---
  const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  const startOfRange = allLetters.lastIndexOf(str[0]);
  const endOfRange = allLetters.lastIndexOf(str[str.length - 1]);

  const lettersRange = allLetters.slice(startOfRange, endOfRange + 1);

  const filter = lettersRange.filter(item => str.split("").every(target => item !== target));

  return filter[0];



  // ---- solution on the site ---

  // for (let i = 0; i < str.length; i++) {
  //   const charCode = str.charCodeAt(i);

  //   if (charCode !== str.charCodeAt(0) + i) {
  //     return String.fromCharCode(charCode - 1)
  //   }
  // }

  // return undefined;

}

// console.log( fearNotLetter("abce") );                         //  d
// console.log( fearNotLetter("abcdefghjklmno") );               //  i
console.log( fearNotLetter("stvwx") );                        //  u
// console.log( fearNotLetter("bcdf") );                         //  e
console.log( fearNotLetter("abcdefghijklmnopqrstuvwxyz") );   //  undefined








// for (let i = 0; i < str.length; i++) {
//   const charCode = str.charCodeAt(i);

//   console.log( str[i], str.charCodeAt(i) );
//   console.log( str[0 + i], str.charCodeAt(0) + i );

//   if (charCode !== str.charCodeAt(0) + i) {
//     return String.fromCharCode(charCode - 1);
//   }

//   console.log( "-----------------------" );
// }

// return undefined;