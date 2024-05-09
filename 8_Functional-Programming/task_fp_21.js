//  21. - Apply Functional Programming to Convert Strings to URL Slugs

// Only change code below this line
function urlSlug(title) {

  return title.toLowerCase().trim().split(/\s+/).join("-");

}
// Only change code above this line

console.log( urlSlug("Winter Is Coming") );       //  winter-is-coming
console.log( urlSlug(" Winter Is  Coming") );     //  winter-is-coming
console.log( urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") );
//  a-mind-needs-books-like-a-sword-needs-a-whetstone
console.log( urlSlug("Hold The Door") );          //  hold-the-doo