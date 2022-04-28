const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const array1 = [...s1].sort();
  const array2 = [...s2].sort();

  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i], "in", array2);
    if (array2.includes(array1[i])) {
      array2.splice(array2.indexOf(array1[i]), 1);
      count++;
    }
  }

  return count;
}

//console.log(getCommonCharacterCount('aabcc', 'adcaa')); //3

module.exports = {
  getCommonCharacterCount
};
