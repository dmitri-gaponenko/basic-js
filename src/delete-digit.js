const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n)  {
  let max = 0;

  const array = [...n.toString()];
  for (let i = 0; i < array.length; i++) {
    const currentArray = [...array];
    currentArray.splice(i, 1);
    const currentNumber = parseInt(currentArray.join(''));
    if (currentNumber > max) {
      max = currentNumber;
    }
  }
  return max;
}

//console.log(deleteDigit(152));//52

module.exports = {
  deleteDigit
};
