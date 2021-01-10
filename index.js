global.test = (name, assertion) => {
  try {
    assertion();
    process.stdout.write(`PASSED\t${name}`);
  } catch (err) {
    process.stdout.write(`FAILED\t${name}`);
    const lines = err.message
      .split("\n")
      .map((x) => `\t${x}`)
      .join("\n");
    process.stdout.write(`\n${lines}`);
  } finally {
    process.stdout.write("\n");
  }
};
