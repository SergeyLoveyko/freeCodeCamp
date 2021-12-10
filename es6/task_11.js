//  11. - Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
//   const lowToday = LOCAL_FORECAST.today.low;
//   const highToday = LOCAL_FORECAST.today.high;
  const {today: {low: lowToday}} = LOCAL_FORECAST;
  const {today: {high: highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line

  console.log(lowToday);        //  64
  console.log(highToday);       //  77