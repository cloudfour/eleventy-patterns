const pretty = require('pretty');

/**
 * Cleans up HTML for code samples. Normalizes tabs, eliminates unnecessary
 * white space, etc.
 *
 * @see https://github.com/jonschlinkert/pretty
 * @param {String} value - A string of HTML to pretty-fy.
 * @returns {String}
 */

module.exports = value =>
  pretty(value, {
    ocd: true,
    inline: [
      'abbr',
      'area',
      'audio',
      'b',
      'bdi',
      'bdo',
      'br',
      'canvas',
      'code',
      'data',
      'datalist',
      'del',
      'dfn',
      'em',
      'i',
      'img',
      'input',
      'ins',
      'kbd',
      'keygen',
      'map',
      'mark',
      'math',
      'meter',
      'output',
      'progress',
      'q',
      'ruby',
      's',
      'samp',
      'sub',
      'sup',
      'time',
      'u',
      'var',
      'wbr',
      'text',
      'acronym',
      'big',
      'strike',
      'tt',
    ],
    unformatted: ['code', 'pre'],
  });
