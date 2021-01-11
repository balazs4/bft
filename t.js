#! /usr/bin/env node
require('./');
process.argv.slice(2).forEach((test) => require(require('path').resolve(test)));
