const requireDir = require('require-dir');
const camelCase = require('camelcase');

// Expose as filters as one export
module.exports = requireDir('.', {
  recurse: true,
  mapKey: (value, basename) => {
    return camelCase(basename);
  }
});
