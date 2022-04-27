const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  const x = parseFloat(sampleActivity);
  // console.log("x", x);
  if (isNaN(x) || x < 1 || x > 15) {
    return false;
  }

  let t = 0;

  const k = 0.693 / HALF_LIFE_PERIOD;
  // console.log("k", k);

  const log = Math.log(MODERN_ACTIVITY / x);
  // console.log("log", log);

  t = log/k;

  return Math.ceil(t);
}

// console.log("x = '3.142'", dateSample('3.142'), "expected:", 12923);
// console.log("x = '1'", dateSample('1'));
// console.log('one', dateSample('one'));
// console.log("null", dateSample(''));
// console.log(1, dateSample(1));
// console.log(-1, dateSample('-1'));
// console.log(16, dateSample('16'));
// console.log(15, dateSample('15'));

module.exports = {
  dateSample
};
