import 'babel-polyfill';
let assert = require('chai').assert;
let PigLatin = require('../src/piglatin');

describe('PigLatin', () => {
    describe('#pigLatinizer', () => {
        it('should return a string',  () => {
            assert.equal(typeof PigLatin.pigLatinizer('Test'), 'string');
        });
    });

    describe('#pigLatinizer("test")', () => {
        it('should return "estay"',  () => {
            assert.equal(PigLatin.pigLatinizer('Test'), 'esttay');
        });
    });

    describe('#pigLatinizer("Justin")', () => {
        it('should return "ustinjay" - first consonant is added before "ay"',  () => {
            assert.equal(PigLatin.pigLatinizer('Justin'), 'ustinjay');
        });
    });

    describe('#pigLatinizer("Jrustin")', () => {
        it('should return "ustinjray" - first two consonants added before "ay"',  () => {
            assert.equal(PigLatin.pigLatinizer('Jrustin'), 'ustinjray');
        });
    });
});
