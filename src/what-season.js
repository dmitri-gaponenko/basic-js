const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return('Unable to determine the time of year!');
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  try {
		date.getTime();
	} catch (error) {
		throw new Error('Invalid date!');
	}
  
  const month = date.getMonth();
  if ([11, 0, 1].includes(month)) {
    return 'winter'
  } else if([2, 3, 4].includes(month)) {
    return 'spring'
  } else if([5, 6, 7].includes(month)) {
    return 'summer'
  } else if([8, 9, 10].includes(month)) {
    return 'autumn'
  }
  
  return null;
}

// console.log("getSeason(new Date(2020, 02, 31)) ", getSeason(new Date(2020, 02, 31))); // 31 Apr
// console.log("getSeason(new Date(2020, 01, 15)) ", getSeason(new Date(2020, 01, 15))); // 15 Feb
// console.log("getSeason(new Date(1582, 5, 24, 3, 30, 22, 496))", getSeason(new Date(1582, 5, 24, 3, 30, 22, 496))); // summer
// console.log("getSeason(new Date(1602, 3, 19, 23, 25, 29, 673))", getSeason(new Date(1602, 3, 19, 23, 25, 29, 673))); // spring
// console.log("getSeason(new Date(1634, 8, 0, 8, 27, 2, 81))", getSeason(new Date(1634, 8, 0, 8, 27, 2, 81))); // summer
// console.log("getSeason(new Date(655, 0, 1, 4, 56, 39, 676))", getSeason(new Date(655, 0, 1, 4, 56, 39, 676))); // winter
//tricky
// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };
// getSeason(fakeDate)

module.exports = {
  getSeason
};
