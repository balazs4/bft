test(`it should fail`, () => {
  const assert = require("assert").strict;
  assert.strictEqual('foobar', 'foobarrrr');
});

test(`it should pass`, () => {
  const assert = require("assert").strict;
  assert.strictEqual(1, 1);
});
