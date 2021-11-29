//  75. - Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if ((par - 3) == strokes) {
        console.log(par - 3);
        return "Hole-in-one!";
    } else if ((par - 2) <= strokes) {
        console.log(par - 2);
        return "Eagle";
    } else if ((par - 1) == strokes) {
        console.log(par - 1);
        return "Birdie";
    } else if (par == strokes) {
        console.log(par == strokes);
        return "Par";
    } else if ((par + 1) == strokes) {
        return "Bogey";
    } else if ((par + 2) == strokes) {
        return "Double Bogey";
    } else if ((par + 3) >= strokes) {
        return "Go Home!";
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