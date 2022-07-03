import fs from 'fs';
import path from 'path';
import fileParse from './parsers.js';
import generateTree from './generateTree.js';
import stylish from './renders/stylish.js';

const getFormat = (filename) => path.extname(filename).slice(1);
const getFullPath = (filename) => path.resolve(process.cwd(), filename);
const getFileContent = (filename) => fs.readFileSync(getFullPath(filename), 'utf-8');

const genDiff = (path1, path2, format = 'stylish') => {
  if (fs.existsSync(path1) && fs.existsSync(path2)) {
    const obj1 = fileParse(getFileContent(path1), getFormat(path1));
    const obj2 = fileParse(getFileContent(path2), getFormat(path2));
    const tree = generateTree(obj1, obj2);
    switch (format) {
      case 'stylish':
        return stylish(tree);
      default:
        throw new Error('Format is not defined.');
    }
  }
  return false;
};
export default genDiff;
