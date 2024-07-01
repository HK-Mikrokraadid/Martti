const assert = require('assert');
const sum = require('./sum');
const { describe, it } = require('mocha');

describe('Sum function', () => {
    it('Should return 3 with arguments 1 and 2', () => {
        assert.strictEqual(sum(1, 2), 3);
    });
    it('Should return 5 with arguments 2 and 3', () => {
        assert.strictEqual(sum(2, 3), 5);
    });
    it('Should return 4 with arguments 2 and 2', () => {
        assert.strictEqual(sum(2, 2), 4);
    });
});
