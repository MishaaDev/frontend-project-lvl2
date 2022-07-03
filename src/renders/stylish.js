const makeIndent = (depth, indent = ' ', indentCount = 2) => indent.repeat(depth * (indentCount + 2) - 2);

const makeString = (value, depth = 1) => {
  if (!(value instanceof Object)) {
    return String(value);
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const prop = value[key];

    return `${makeIndent(depth)}  ${key}: ${makeString(prop, depth + 1)}`;
  });

  return `{\n${result.join('\n')}\n  ${makeIndent(depth - 1)}}`;
};

const renderTree = (nodes) => {
  const iteration = (node, depth = 1) => {
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
        return `\n${makeIndent(depth)}  ${key}: {${children.map((e) => iteration(e, depth + 1)).join('')}\n${makeIndent(depth)}  }`;
      case 'deleted':
        return `\n${makeIndent(depth)}- ${key}: ${makeString(value, depth + 1)}`;
      case 'added':
        return `\n${makeIndent(depth)}+ ${key}: ${makeString(value, depth + 1)}`;
      case 'changed':
        const added = `\n${makeIndent(depth)}+ ${key}: ${makeString(addedValue, depth + 1)}`;
        const removed = `\n${makeIndent(depth)}- ${key}: ${makeString(removedValue, depth + 1)}`;
        return `${removed}${added}`;
      case 'unchanged':
        return `\n${makeIndent(depth)}  ${key}: ${makeString(value, depth + 1)}`;
      default:
        return null;
    }
  };
  return iteration(nodes);
};

const stylish = (tree) => {
  const result = tree.map((node) => renderTree(node));

  return `{${result.join('')}\n}`;
};

export default stylish;
