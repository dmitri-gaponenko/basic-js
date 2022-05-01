const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let isValid = false;
  const NUMBERS_HEX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const CHARS_HEX = ['A', 'B', 'C', 'D', 'E', 'F'];
  let groups = n.split('-');
  for (let index = 0; index < groups.length; index++) {
    const element = groups[index];
    let array = element.split('');
    if (NUMBERS_HEX.includes(array[0]) || CHARS_HEX.includes(array[0]) &&
        NUMBERS_HEX.includes(array[1]) || CHARS_HEX.includes(array[1])) {
      isValid = true;
    } else {
      return false;
    }
  }

  return isValid;
}

// console.log(isMAC48Address('00-1B-63-84-45-E6'));
// console.log(isMAC48Address('Z1-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
