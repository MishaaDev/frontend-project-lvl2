#!/usr/bin/env node
import test from '../src/index.js';
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.1.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')

program.parse();