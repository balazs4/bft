#! /usr/bin/env node
import { resolve } from 'path';
import { test } from './index.js';

global.test = test;

process.argv
  .slice(2)
  .map((x) => resolve(x))
  .forEach((x) => import(x));
