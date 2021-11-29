//  82. - Counting Cards

let count = 0;

  function cc(card) {
  // Only change code below this line
  let score = 0;
  let res = "";
  const output = ``;
    
  
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
  }
    
  if (count > 0) {
    score++;
  } else {
    score;
  }
    
  
    console.log(count);
  return score;
  // Only change code above this line
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));