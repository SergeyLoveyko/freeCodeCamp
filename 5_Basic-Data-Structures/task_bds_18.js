//  18. - Iterate Through the Keys of an Object with a for...in Statement

const usersOne = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

const usersTwo = {
    Alan: {
      online: true
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: true
    }
}

const usersThree = {
    Alan: {
      online: false
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: false
    }
}

function countOnline(usersObj) {
// Only change code below this line
    let res = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            res++;
        }
    }
    return res;
// Only change code above this line
}

console.log(countOnline(usersOne));         //  1
console.log(countOnline(usersTwo));         //  2
console.log(countOnline(usersThree));       //  0