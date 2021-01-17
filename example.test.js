const { test } = require('./');
const assert = require('assert').strict;

test(`it should pass async`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  assert.strictEqual(2, 2);
});

test(`it should pass`, () => {
  assert.strictEqual(2, 2);
});

test(`it should fail`, () => {
  assert.strictEqual('foobar', 'foobarrrrrrrr');
});

test(`it should skip`);

test(`it should fail async`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  assert.strictEqual(3, 2);
});
