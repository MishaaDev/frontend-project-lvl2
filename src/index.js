import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import fileParse from './parsers.js';

const getFormat = (filename) => path.extname(filename).slice(1);
const getFullPath = (filename) => path.resolve(process.cwd(), filename);
const getFileContent = (filename) => fs.readFileSync(getFullPath(filename), 'utf-8');

const genDiff = (path1, path2) => {
  if (fs.existsSync(path1) && fs.existsSync(path2)) {
    const obj1 = fileParse(getFileContent(path1), getFormat(path1));
    const obj2 = fileParse(getFileContent(path2), getFormat(path2));
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const sortedKeys = _.union(keys1, keys2).sort();
    const result = [];
    sortedKeys.map((key) => {
      if (!Object.hasOwn(obj1, key)) {
        result.push(`  + ${key}: ${obj2[key]}`);
      } else if (!Object.hasOwn(obj2, key)) {
        result.push(`  - ${key}: ${obj1[key]}`);
      } else if (obj1[key] === obj2[key]) {
        result.push(`    ${key}: ${obj1[key]}`);
      } else {
        result.push(`  - ${key}: ${obj1[key]}`);
        result.push(`  + ${key}: ${obj2[key]}`);
      }
      return null;
    });
    return `{\n${result.join('\n')}\n}`;
  }
  return false;
};
export default genDiff;
