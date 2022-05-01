const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let prevChar = '';
  let count = 0;
  let charArray = str.split('');
  for (let i = 0; i < charArray.length; i++) {
    const element = charArray[i];
    // console.log(element);
    if (element === prevChar) {
      count++;
    } else {
      if (i !== 0) {
        result += (count === 1 ? '' : count) + prevChar;
      }
      prevChar = element;
      count = 1;
    }
  }  
  result += (count === 1 || count === 0 ? '' : count) + prevChar;

  return result;
}

// console.log(encodeLine('aabbbc'));
// console.log(encodeLine(''));

module.exports = {
  encodeLine
};
