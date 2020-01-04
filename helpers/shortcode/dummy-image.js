const simpleSvgPlaceholder = require('@cloudfour/simple-svg-placeholder');

/**
 * Return an inline SVG as a string suitable for including in an `<img>`
 * element's `src` attribute.
 *
 * @param {Number} width
 * @param {Number} [height] - Will default to the same number as width.
 * @param {String} [text] - Will default to the width and height.
 * @return {String}
 * @see https://github.com/cloudfour/simple-svg-placeholder
 */
module.exports = (width, height, text) => {
  /**
   * In theory we would be able to pass this to our template function as
   * simply `{ width, height, text }`, but if the template language is
   * Handlebars, the last argument will always be an object containing template
   * data. To avoid that along as a value for `height` or `text`, we do a type
   * check on that argument first.
   */
  const options = {
    width,
    height: typeof height === 'number' ? height : undefined,
    text: typeof text === 'string' ? text : undefined
  };

  return simpleSvgPlaceholder(options);
};
