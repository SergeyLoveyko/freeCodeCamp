//  15. - Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let res of arr) {
        failureItems.push(`<li class="text-warning">${res}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);


console.log(failuresList);
//   [
//     '<li class="text-warning">no-var</li>',
//     '<li class="text-warning">var-on-top</li>',
//     '<li class="text-warning">linebreak</li>'
//   ]