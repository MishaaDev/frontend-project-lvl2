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
const resultStylish = readFile('resultStylish.txt');
const resultPlain = readFile('resultPlain.txt');
const resultJson = readFile('resultJson.txt');

test('empty value', () => {
  expect(genDiff(jsonFile1, '')).toEqual(false);
  expect(genDiff('', jsonFile2)).toEqual(false);
});

test('stylish render', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(resultStylish);
});

test('different file types', () => {
  expect(genDiff(yamlFile1, yamlFile2)).toEqual(resultStylish);
  expect(genDiff(jsonFile1, yamlFile2)).toEqual(resultStylish);
  expect(genDiff(jsonFile1, ymlFile2)).toEqual(resultStylish);
});

test('plain render', () => {
  expect(genDiff(jsonFile1, jsonFile2, 'plain')).toEqual(resultPlain);
});

test('json render', () => {
  expect(genDiff(jsonFile1, jsonFile2, 'json')).toEqual(resultJson);
});
