const simpleSvgPlaceholder = require('@cloudfour/simple-svg-placeholder');

/**
 * Return an inline SVG as a string suitable for including in an `<img>`
 * element's `src` attribute.
 *
 * @param {Object} [options] - Settings for the simpleSvgPlaceholder function.
 * @see https://github.com/cloudfour/simple-svg-placeholder
 * @return {String}
 */
module.exports = options => simpleSvgPlaceholder(options.hash || {});
