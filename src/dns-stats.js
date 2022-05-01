const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let dns = '';
    domains[i].split('.').reverse().forEach(element => {
      dns += `.${element}`;
      let count = result[dns] ? result[dns] : 0;
      result[dns] = count + 1;
    });
  }

  return result;
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));
// console.log(getDNSStats(['epam.com']));

module.exports = {
  getDNSStats
};
