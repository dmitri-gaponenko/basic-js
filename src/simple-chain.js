const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ''} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`); 
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

// console.log(chainMaker.finishChain());
// console.log(chainMaker.getLength());
//  console.log(chainMaker.addLink().addLink(22).addLink(33).removeLink(4).reverseChain().finishChain());
//  console.log(chainMaker.addLink().addLink(22).addLink(33).finishChain());
//  console.log(chainMaker.addLink(null).addLink(22).addLink(33).finishChain());
//  console.log(chainMaker.addLink(NaN).addLink(22).addLink(33).finishChain());
//  console.log(chainMaker.addLink(false).addLink(22).addLink(33).finishChain());
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));

module.exports = {
  chainMaker
};
