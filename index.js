/**
 * test function for `t`
 *
 * @param {string} name - name of test
 * @param {function | Promise<void>} [assertion] - test code
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
  try {
    if (assertion === null) {
      await Promise.resolve();
      log(`SKIPPED\t${name}`);
      return;
    }
    await assertion();
    log(`PASSED\t${name}`);
  } catch (err) {
    log(`FAILED\t${name}`);
    const lines = err.message
      .split('\n')
      .map((x) => `\t${x}`)
      .join('\n');
    log(`\n${lines}`);
    process.exitCode = process.exitCode ? process.exitCode + 1 : 1;
  } finally {
    log('\n');
  }
};
