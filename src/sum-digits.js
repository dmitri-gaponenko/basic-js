const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let digits = n.toString().split('');
  let digitsSum = 0;
  while (digitsSum > 9 || digitsSum === 0) {
    if (digitsSum > 0) {
      digits = digitsSum.toString().split('');
      digitsSum = 0;
    }
    for (let i = 0; i < digits.length; i++) {
      digitsSum += parseInt(digits[i]);
    }
  }

  return digitsSum;
}

// console.log(getSumOfDigits(91)); // 1
// console.log(getSumOfDigits(100)); // 1
// console.log(getSumOfDigits(99)); // 9

module.exports = {
  getSumOfDigits
};
