#! /usr/bin/env node
global.test = require('./').test;

process.argv
  .slice(2)
  .map((x) => require('path').resolve(x))
  .forEach((testfile) => import(testfile));
