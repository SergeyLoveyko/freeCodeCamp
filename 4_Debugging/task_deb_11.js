//  11. - Use Caution When Reinitializing Variables Inside a Loop

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let newRow = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        newRow.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(newRow);
    }
    return newArray;
  }
  
  const matrix = zeroArray(3, 2);
  const matrixF = zeroArray(4, 3);

  console.log(matrix);      //  [[ 0, 0 ], [ 0, 0 ], [ 0, 0 ]]
  console.log(matrixF);     //  [[ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ]]