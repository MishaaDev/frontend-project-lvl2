import fs from 'fs';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const currentLocation = process.cwd();

  // const test = JSON.parse(read);
  if (fs.existsSync(path1) && fs.existsSync(path2)) {
    const obj1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
    const obj2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const sortedKeys = _.union(keys1, keys2).sort();
    const result = [];
    sortedKeys.map((key) => {
      if (!Object.hasOwn(obj1, key)) {
        result.push(`  + ${key}: ${obj2[key]}`)
      } else if (!Object.hasOwn(obj2, key)) {
        result.push(`  - ${key}: ${obj1[key]}`)
      } else if (obj1[key] === obj2[key]) {
        result.push(`    ${key}: ${obj1[key]}`)
      } else {
        result.push(`  - ${key}: ${obj1[key]}`)
        result.push(`  + ${key}: ${obj2[key]}`)
      }
      return null;
    });
    return `{\n${result.join('\n')}\n}`;
  }
  return false;
}
export default genDiff;