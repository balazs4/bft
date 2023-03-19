const { test } = require('node:test');
const assert = require('assert').strict;

test(`it should pass`, () => {
  console.log('foo');
  assert.strictEqual(2, 2);
});

test(`it should fail`, () => {
  assert.strictEqual('foobar', 'foobarrrrrrrr');
});
