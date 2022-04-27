const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const separator = options.separator ? options.separator : '+';

  let innerArray = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (String(options.addition) !== 'undefined') {
      innerArray.push(String(options.addition));
    }
  }
  const innerString = innerArray.join(additionSeparator);

  let outerArray = [];
  for (let i = 0; i < repeatTimes; i++) {
    outerArray.push(String(str) + innerString);    
  }
  return outerArray.join(separator);
}

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
//                                  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));/*STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'*/
// console.log(repeater('la', { repeatTimes: 3 }));//'la+la+la'                                 
// console.log(repeater('single', { repeatTimes: 1 }));
// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));//TESTstrADD!

module.exports = {
  repeater
};
