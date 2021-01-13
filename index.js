global.test = async (name, assertion) => {
  try {
    await assertion();
    process.stdout.write(`PASSED\t${name}`);
  } catch (err) {
    process.stdout.write(`FAILED\t${name}`);
    const lines = err.message
      .split('\n')
      .map((x) => `\t${x}`)
      .join('\n');
    process.stdout.write(`\n${lines}`);
    process.exitCode = process.exitCode ? process.exitCode + 1 : 1;
  } finally {
    process.stdout.write('\n');
  }
};
