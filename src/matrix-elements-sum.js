const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let zeroIndexes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // console.log(matrix[i][j], 'i=', i, 'j=', j);
      if (!zeroIndexes.includes(j)) {
        result += matrix[i][j];
      }
      if (matrix[i][j] === 0) {
        zeroIndexes.push(j);
      }
    }
  }

  return result;
}

// console.log(getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]));//9

module.exports = {
  getMatrixElementsSum
};
