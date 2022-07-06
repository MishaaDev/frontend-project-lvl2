import _ from 'lodash';

const makeString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return typeof (value) === 'string' ? `'${value}'` : value;
};

const renderTree = (nodes) => {
  const iteration = (node, acc = '') => {
    const {
      key,
      type,
      value,
      children,
      removedValue,
      addedValue,
    } = node;

    switch (type) {
      case 'nested':
        return children.map((e) => iteration(e, `${acc}${key}.`)).join('');
      case 'deleted':
        return `\nProperty '${acc}${key}' was removed`;
      case 'added':
        return `\nProperty '${acc}${key}' was added with value: ${makeString(value)}`;
      case 'changed':
        return `\nProperty '${acc}${key}' was updated. From ${makeString(removedValue)} to ${makeString(addedValue)}`;
      case 'unchanged':
        return '';
      default:
        return null;
    }
  };
  return iteration(nodes);
};

const plain = (tree) => {
  const result = tree.map((node) => renderTree(node));

  return result.join('').trim();
};

export default plain;
