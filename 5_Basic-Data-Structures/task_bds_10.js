//  10. - Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
    // if (arr.indexOf(elem) >= 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return arr.indexOf(elem) >= 0 ? true : false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));   //  false
  console.log(quickCheck(["onions", "squash", "shallots"], "onions"));      //  true
  console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));                      //  true
  console.log(quickCheck([true, false, false], undefined));                 //  false