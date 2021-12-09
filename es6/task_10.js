//  10. - Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {
    today: highToday
} = HIGH_TEMPERATURES;
const {
    tomorrow: highTomorrow
} = HIGH_TEMPERATURES;

// Only change code above this line
console.log(highToday); //                  77
console.log(highTomorrow); //              88