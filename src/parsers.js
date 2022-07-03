import { load } from 'js-yaml';

const parsers = (content, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yaml':
    case 'yml':
      return load(content);
    default:
      throw new Error('Wrong file format. Program only fork with JSON and YAML format.');
  }
};

export default parsers;
