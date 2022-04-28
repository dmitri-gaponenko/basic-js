const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.crypt(message, key, true);
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.crypt(message, key, false);
  }

  crypt(message, key, isEncrypt) {
    let result = '';
    while (message.length > key.length) {
      key += key;
    }
    key = key.slice(0, message.length);
    message = message.toUpperCase();
    key = key.toUpperCase();
    // console.log('mes:', message);
    // console.log('key:', key);

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        // shifted alphabet starts with key's char
        let shiftedAlphabet = this.alphabet.slice(this.alphabet.indexOf(key[keyIndex])) + this.alphabet;
        shiftedAlphabet = shiftedAlphabet.slice(0, 26);
        //console.log('shiftedAlphabet', shiftedAlphabet);
        if (isEncrypt) {
          result += shiftedAlphabet[this.alphabet.indexOf(message[i])];
        } else {
          result += this.alphabet[shiftedAlphabet.indexOf(message[i])];
        }
        keyIndex++;
      } else {
        result += message[i];
      }
    }
    return this.isDirect ? result : [...result].reverse().join('');
  }
}

// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); //=> 'AEIHQX SX DLLU!'
// console.log(directMachine.encrypt('atd', 'tpo'));//TIR

// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); //'!ULLD XS XQHIEA'

// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> 'ATTACK AT DAWN!'
 
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> '!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine
};
