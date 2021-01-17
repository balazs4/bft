#! /usr/bin/env node
global.test = require('./').test;
process.argv
  .slice(2)
  .forEach((testfile) => require(require('path').resolve(testfile)));
