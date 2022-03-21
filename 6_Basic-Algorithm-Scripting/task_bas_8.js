//  8. - Truncate a String

function truncateString(str, num) {
    return str.length <= num ? str : str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//  "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
//  "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
//  "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
//  "A-tisket a-tasket A green and yellow basket"