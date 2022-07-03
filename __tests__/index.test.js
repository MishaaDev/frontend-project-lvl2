import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = getFixturePath('flatFile1.json');
const file2 = getFixturePath('flatFile2.json');
const result = readFile('flatResult.txt');

test('Two flat JSON files', () => {
  expect(genDiff(file1, '')).toEqual(false);
  expect(genDiff('', file2)).toEqual(false);
  expect(genDiff(file1, file2)).toEqual(result);
});
