const requireDir = require('require-dir');
const camelCase = require('camelcase');

module.exports = requireDir('.', {
  recurse: true,
  mapKey: (value, basename) => {
    let newName = '';
    if (typeof value === 'object') {
      newName = camelCase(basename, { pascalCase: true });
    } else {
      newName = camelCase(basename);
    }

    return newName;
  },
});
