const fs = require('fs');

module.exports = path => {
  return fs.readFileSync(path, 'utf8');
};
