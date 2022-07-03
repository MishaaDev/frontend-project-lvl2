#!/usr/bin/env node
import genDiff from '../src/index.js';
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.1.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2) => {
    console.log(genDiff(path1, path2));
  })

program.parse();