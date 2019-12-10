const path = require('path');

module.exports = (first, second) => {
  return path.dirname(first) === `${path.dirname(second)}/examples`;
};
