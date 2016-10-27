import 'babel-polyfill';
let assert = require('chai').assert;

let PigLatin = require('../src/piglatin');

describe('PigLatin', () => {
    describe('#pigLatinizer', () => {
        it('should return a string',  () => {
            let result = PigLatin.pigLatinizer('Test');

            assert.equal(typeof result, 'string');
        });
    });

    describe('#pigLatinizer', () => {
        it('should return "estay" if provided "test"',  () => {
            let result = PigLatin.pigLatinizer('Test');

            assert.equal(result, 'esttay');
        });
    });
});
