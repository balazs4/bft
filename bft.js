#! /usr/bin/env node
global.test = require('./').test;

process.argv
  .slice(2)
  .map((x) => require('path').resolve(x))
  .foreach((testfile) => {
    process.stdout.write(`${testfile}\n`);
    return require(testfile);
  });
