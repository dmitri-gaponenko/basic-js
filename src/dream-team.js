const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];

  for (let index = 0; index < members.length; index++) {
    const element = members[index];
    if (typeof element === 'string') {
      let name = element.trim();
      // console.log("name", name);
      result.push(name.slice(0, 1).toUpperCase());
    }
  }
  result.sort();

  return result.join('');
}

// console.log("['Matt', 'Ann', 'Dmitri', 'Max'] => 'ADMM'", createDreamTeam(['Matt', 'Ann', 'Dmitri', 'Max']));
// console.log("'ADMM'", createDreamTeam('ADMM'));

module.exports = {
  createDreamTeam
};
