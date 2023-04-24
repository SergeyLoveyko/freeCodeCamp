//  95. - Record Collection

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  //   if (!prop) {
        
  //   }
  // return records;

  if (value.length == 0) {
    delete records[id][prop];
  }

  if (prop != "tracks" && value.length !== 0) {
    records[id][prop] = value;
  }

  if (prop == "tracks" && value.length !== 0) {
    if (!records[id].hasOwnProperty(prop)) {
      records[id][prop] = [];
      records[id][prop].push(value);
    } else {
      records[id][prop].push(value);
    }
  }

  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));   //  id: 5439 -> artist - ABBA
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));   //  id: 5439 -> tracks - Take a Chance on Me
console.log(updateRecords(recordCollection, 2548, "artist", ""));   //  id: 5439 -> artist should not be set
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));   //  id: 5439 -> tracks - Addicted to Love
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));   //  id: 5439 -> tracks - should have the string 1999 as the first element.
console.log(updateRecords(recordCollection, 2548, "tracks", ""));   //  id: 5439 -> tracks should not be set.
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));   //  id: 5439 -> albumTitle - Riptide

