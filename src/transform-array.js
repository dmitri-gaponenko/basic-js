const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`); 
  }
  let result = [];
  const CONTROL_SEQUENCES = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  //control sequences
  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next duplicates the next element of the array in the transformed array.
  // --double-prev duplicates the previous element of the array in the transformed array.
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!CONTROL_SEQUENCES.includes(element)) {
      result.push(element);
    }

    if (element === '--discard-prev') {
      if ('--discard-next' === arr[i - 2] || i === 0) {
        //i++;
      } else {
        result.pop();
      }
    }
    if (element === '--discard-next') {
      i++;
    }
    if (element === '--double-prev') {
      if ('--discard-next' === arr[i - 2] || i === 0) {
        //i++;
      } else {
        result.push(arr[i - 1]);
      }
    }
    if (element === '--double-next') {
      if (i !== arr.length - 1) {
        result.push(arr[i + 1]);
      }
    }
  }

  return result;
}

// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--discard-next', 4, 5]));
// console.log(transform([1, 2, 3, '--double-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--double-next', 4, 5]));
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));

module.exports = {
  transform
};
