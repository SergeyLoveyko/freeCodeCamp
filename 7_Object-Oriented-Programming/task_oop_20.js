//  20. - Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;      //  add this line
Dog.prototype.constructor = Dog;        //  add this line


let duck = new Bird();
let beagle = new Dog();

console.log( duck.constructor )
console.log( beagle.constructor )