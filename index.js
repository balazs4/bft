/**
 * test function for `t`
 *
 * @param {string} name - name of test
 * @param {function} [assertion] - test code
 */
module.exports.test = async (name, assertion = null) => {
  const log = (txt) => {
    return process.stdout.write(
      process.stdout.hasColors && process.stdout.hasColors() === true
        ? txt
            .replace(/^PASSED/, '\x1b[32mPASSED\x1b[39m')
            .replace(/^FAILED/, '\x1b[31mFAILED\x1b[39m')
            .replace(/^SKIPPED/, '\x1b[2mSKIPPED\x1b[0m')
        : txt
    );
  };
  setImmediate(async () => {
    try {
      if (assertion === null) {
        log(`SKIPPED\t${name}`);
        return;
      }

      const result = assertion();
      await result;

      log(`PASSED\t${name}`);
    } catch (err) {
      log(`FAILED\t${name}`);
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
