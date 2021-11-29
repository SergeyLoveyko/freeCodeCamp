//  104. - Profile Lookup

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));   //  Vos
console.log(lookUpProfile("Sherlock", "likes"));      //  ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));         //  No such contact
console.log(lookUpProfile("Bob", "number"));          //  No such contact
console.log(lookUpProfile("Bob", "potato"));          //  No such property
console.log(lookUpProfile("Akira", "likes"));         //  