//  82. - Counting Cards

let count = 0;

  function cc(card) {
  // Only change code below this line

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
    
  if (count > 0) {
    console.log( count + " Bet" );
    return count + " Bet";
  } else {
    console.log( count + " Hold" );
    return count + " Hold";
  }

    
}

// cc(2), cc(3), cc(7), cc('K'), cc('A');

// cc(2), cc(3), cc(4), cc(5), cc(6);       //  5 Bet
// cc(7), cc(8), cc(9);                     //  0 Hold

cc(10), cc('J'), cc('Q'), cc('K'), cc('A');   //  -5 Hold

// cc(3), cc(7), cc('Q'), cc(8), cc('A');   //  -1 Hold
// cc(2), cc('J'), cc(9), cc(2), cc(7);     //  1 Bet
// cc(2), cc(2), cc(10);                    //  1 Bet
// cc(3), cc(2), cc('A'), cc(10), cc('K');  //  -1 Hold
