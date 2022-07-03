import _ from 'lodash';

const generateTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortedKeys = _.union(keys1, keys2).sort();
  const result = sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return {
        key,
        type: 'nested',
        children: generateTree(value1, value2),
      };
    }
    if (!Object.hasOwn(obj2, key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }
    if (!Object.hasOwn(obj1, key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }
    if (value1 !== value2) {
      return {
        key,
        type: 'changed',
        removedValue: value1,
        addedValue: value2,
      };
    }
    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });
  return result;
};

export default generateTree;
