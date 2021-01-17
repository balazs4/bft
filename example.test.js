test(`it should fail`, () => {
  const assert = require('assert').strict;
  assert.strictEqual('foobar', 'foobarrrrrrrr');
});

test(`it should pass`, () => {
  const assert = require('assert').strict;
  assert.strictEqual(2, 2);
});

test(`it should skip`);

test(`it should pass`, () => {
  const assert = require('assert').strict;
  assert.strictEqual(2, 2);
});
