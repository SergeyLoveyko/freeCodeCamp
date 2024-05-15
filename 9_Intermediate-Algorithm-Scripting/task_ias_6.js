//  6. - Pig Latin

function translatePigLatin(str) {

  if (/([^aeiou]+)/.test(str[0])) {
    return str.replace(/([^aeiou]+)(\w*)/, "$2$1ay");
  }

  return str + "way";

}

translatePigLatin("consonant");

console.log(translatePigLatin("consonant"));    //  onsonantcay
console.log(translatePigLatin("california"));   //  aliforniacay
console.log(translatePigLatin("paragraphs"));   //  aragraphspay
console.log(translatePigLatin("glove"));        //  oveglay
console.log(translatePigLatin("algorithm"));    //  algorithmway
console.log(translatePigLatin("schwartz"));     //  artzschway
console.log(translatePigLatin("rhythm"));       //  rhythmay