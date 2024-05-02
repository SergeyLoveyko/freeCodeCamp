//  12. - Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  let start = 0;
  let end = size

  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(start, end))
    start += size;
    end += size

    // newArr.push(arr.slice(i, i + size));
    //  instead of "start" and "end"
  }

  console.log(newArray)
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);         //   [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);           //   [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);           //   [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);           //   [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);        //   [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);  //   [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);  //   [[0, 1], [2, 3], [4, 5], [6, 7], [8]]