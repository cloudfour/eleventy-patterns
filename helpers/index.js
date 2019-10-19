const requireDir = require('require-dir');

console.log(requireDir('./filter'));

// Expose as filters as one export
module.exports = requireDir('./filter');
