//  75. - Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line

    if (strokes === 1) {
        return names[0];
    } else if (strokes === 2) {
        return names[1];
    } else if ((par - 1) == strokes) {
        return names[2];
    } else if (par == strokes) {
        return names[3];
    } else if ((par + 1) == strokes) {
        return names[4];
    } else if ((par + 2) == strokes) {
        return names[5];
    } else {
        return names[6];
    }

    return "Change Me";
    // Only change code above this line
}

console.log(golfScore(4, 1));   //  Hole-in-one!
console.log(golfScore(4, 2));   //  Eagle
console.log(golfScore(5, 2));   //  Eagle
console.log(golfScore(4, 3));   //  Birdie
console.log(golfScore(4, 4));   //  Par
console.log(golfScore(1, 1));   //  Hole-in-one!
console.log(golfScore(5, 5));   //  Par
console.log(golfScore(4, 5));   //  Bogey
console.log(golfScore(4, 6));   //  Double Bogey
console.log(golfScore(4, 7));   //  Go Home!
console.log(golfScore(5, 9));   //  Go Home!