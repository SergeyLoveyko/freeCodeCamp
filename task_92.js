//  92. - Manipulating Complex Objects

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push({
    "artist": "Tommy Emmanuel",
    "title": "Angelina",
    "release_year": 1998,
    "formats": [
        "CD",
        "LP"
    ]
});

console.log(myMusic);