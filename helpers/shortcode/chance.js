const chance = require('chance').Chance();

/**
 * Generate random content via [Chance.js](http://chancejs.com).
 *
 * @param {String} method - Chance method to use.
 * @param {Object|String} [options] - Additional options to pass to the method.
 * May be an object or a JSON-formatted string.
 * @return {*}
 * @see {@link http://chancejs.com|Chance.js}
 */
module.exports = (method, options) => {
  if (typeof chance[method] !== 'function') {
    throw new TypeError(`The "chance" shortcode does not support "${method}"`);
  }

  if (typeof options === 'string') {
    options = JSON.parse(options);
  }

  return chance[method](options);
};
