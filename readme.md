# bft

> **b**loat-**f**ree-**t**estrunner for node.js using ESModules

## usage

```bash
npx bft test.js test/foobar.js path/to/test/file.js
```

```javascript
// test.js

import { strict as assert } from 'assert';

test('this a test case', () => {
   assert.strictEqual(42, 42);
});

test('another test', async () => {
   const expected = 'foobar';
   const actual = await yourCodeUnderTest();
   assert.strictEqual(actual, expected);
});

test('i do not like the built-in assert module', () => {
   throw new Error('no problem; just thrown an execption and this testcase will fail');
});

```

## recipes

### watch mode - [onchange](https://www.npmjs.com/package/onchange)

```
npx onchange -i -k '*.test.js' -- npx bft *.test.js
```

### coverage - [c8](https://www.npmjs.com/package/c8)
```
npx c8 --all npx bft *.test.js
```

## faq

- Can I use the module without touching `global` object?  
  - Yes! see [example.test.js](example.test.js)

- Where are the `setup` and `teardown` functions?
  - In the bloated testrunners ;-)  `bft` encourages you to use [AAA - Arrange Act Assert](http://wiki.c2.com/?ArrangeActAssert) pattern.

- "If bloat-free, then color-free please"
   - `NO_COLOR=1 npx bft test.js` is your friend.

## author

balazs4 - https://twitter.com/balazs4

## license

MIT
