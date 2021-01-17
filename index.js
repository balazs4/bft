global.test = async (name, assertion = null) => {
  const log = (txt) => {
    return process.stdout.write(
      process.stdout.hasColors() === true
        ? txt
            .replace(/^PASSED/, '\x1b[32mPASSED\x1b[39m')
            .replace(/^FAILED/, '\x1b[31mFAILED\x1b[39m')
            .replace(/^SKIPPED/, '\x1b[33mSKIPPED\x1b[39m')
        : txt
    );
  };
  try {
    (await assertion) ? assertion() : Promise.resolve();
    if (assertion === null) {
      log(`SKIPPED\t${name}`);
      return;
    }
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
