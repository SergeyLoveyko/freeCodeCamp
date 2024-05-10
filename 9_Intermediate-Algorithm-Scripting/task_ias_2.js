//  2. - Diff Two Arrays

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) );                      //  [ 4 ]
console.log( diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) );        //  [ 'piglet', 4 ]
console.log( diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) );
//  [ 'snuffleupagus', 'cookie monster', 'elmo' ]

console.log( diffArray([1, "calf", 3, "piglet"], [7, "filly"]) );
//  [ 1, 'calf', 3, 'piglet', 7, 'filly' ]

console.log( diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
) );
//  [ 'pink wool' ]

console.log( diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
) );
//  [ 'pink wool', 'diorite' ]

console.log( diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
) );
//  []


