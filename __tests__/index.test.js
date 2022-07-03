import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFullPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFullPath(filename), 'utf-8');

const jsonFile1 = getFullPath('file1.json');
const jsonFile2 = getFullPath('file2.json');
const yamlFile1 = getFullPath('file1.yaml');
const yamlFile2 = getFullPath('file2.yaml');
const ymlFile2 = getFullPath('file2.yml');
const result = readFile('result.txt');

test('With missing path', () => {
  expect(genDiff(jsonFile1, '')).toEqual(false);
  expect(genDiff('', jsonFile2)).toEqual(false);
});

test('With same format', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(result);
  expect(genDiff(yamlFile1, yamlFile2)).toEqual(result);
});

test('With different format', () => {
  expect(genDiff(jsonFile1, yamlFile2)).toEqual(result);
  expect(genDiff(jsonFile1, ymlFile2)).toEqual(result);
});
