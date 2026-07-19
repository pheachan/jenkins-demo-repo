const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('../src/sum');

test('adds 2 + 3 to equal 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.strictEqual(sum(-1, -1), -2);
});
