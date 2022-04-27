const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  for (let index = 0; index < backyard.length; index++) {
    const box = backyard[index];
    //console.log("box:", box, box.includes('^^'));
    for (let j = 0; j < box.length; j++) {
      if (box[j] === '^^') {
        count++;
      }
    }
  }

  return count;
}

// console.log("count cats:", countCats([
//   [0, 1, '^^'],
//   [0, '^^', '^^'],
//   ['^^', 1, 2]
//  ]));

module.exports = {
  countCats
};
