//  7. - Search and Replace

function myReplace(str, before, after) {
  const testLowerRegistr = /^[a-z]/.test(str.match(before));

  if (testLowerRegistr) {
    return str.replace(before, after[0].toLowerCase() + after.slice(1));
  }
  
  return str.replace(before, after[0].toUpperCase() + after.slice(1))
}


console.log( myReplace("Let us go to the store", "store", "mall") );
//  Let us go to the mall

console.log( myReplace("He is Sleeping on the couch", "Sleeping", "sitting") );
//  He is Sitting on the couch

console.log( myReplace("I think we should look up there", "up", "Down") );
//  I think we should look down there

console.log( myReplace("This has a spellngi error", "spellngi", "spelling") );
//  This has a spelling error

console.log( myReplace("His name is Tom", "Tom", "john") );
//  His name is John

console.log( myReplace("Let us get back to more Coding", "Coding", "algorithms") );
//  Let us get back to more Algorithms