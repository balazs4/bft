#! /usr/bin/env node

const colors =
  typeof process.stdout.hasColors === 'function' &&
  process.stdout.hasColors() === true
    ? true
    : false;

(async () => {
  const eol = require('node:os').EOL;
  const stdin = require('node:readline').createInterface(process.stdin);
  for await (const line of stdin) {
    if (colors === true) {
      const colored = line
        .replace(/duration_ms:? \d+.\d+/, '\x1b[2m$&\x1b[0m')
        .replace(/not ok/, '\x1b[31mnot ok\x1b[0m')
      process.stdout.write(`${colored}${eol}`);
      continue;
    }

    process.stdout.write(`${line}${eol}`);

    // .replace(/^PASSED/, '\x1b[32mPASSED\x1b[0m')
    // .replace(/^FAILED/, '\x1b[31mFAILED\x1b[0m')
    // .replace(/^SKIPPED/, '\x1b[33mSKIPPED\x1b[0m')
    // ? `\x1b[1m${description}\x1b[0m`
  }
})();
