/**
 * test function for `bft`
 *
 * @param {string} description - description of test
 * @param {function|Promise<void>} [assertion] - test code
 */
module.exports.test = async (description, assertion = null) => {
  const log = (txt) => {
    return process.stdout.write(
      process.stdout.hasColors && process.stdout.hasColors() === true
        ? txt
            .replace(/^PASSED/, '\x1b[32mPASSED\x1b[0m')
            .replace(/^FAILED/, '\x1b[31mFAILED\x1b[0m')
            .replace(/^SKIPPED/, '\x1b[33mSKIPPED\x1b[0m')
        : txt
    );
  };
  const [, , caller] = new Error().stack.split('at ');
  const [, filename] = caller.match(/\((.*)\)/);
  const origin =
    process.stdout.hasColors && process.stdout.hasColors() === true
      ? `\x1b[2m${filename}\x1b[0m`
      : filename;

  const name = 
    process.stdout.hasColors && process.stdout.hasColors() === true
      ? `\x1b[1m${description}\x1b[0m`
      : description;
  setImmediate(async () => {
    try {
      if (assertion === null) {
        log(`SKIPPED\t${name} << ${origin}`);
        return;
      }

      const result = assertion();
      await result;

      log(`PASSED\t${name} << ${origin}`);
    } catch (err) {
      log(`FAILED\t${name} << ${origin}`);
      const lines = err.stack
        .split('\n')
        .map((x) => `\t${x}`)
        .join('\n');
      log(`\n${lines}`);
      process.exitCode = process.exitCode ? process.exitCode + 1 : 1;
    } finally {
      log('\n');
    }
  });
};
