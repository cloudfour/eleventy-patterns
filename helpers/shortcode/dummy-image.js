function template({
  width,
  height = width,
  text = `${width}&#215;${height}`,
  fontFamily = 'sans-serif',
  fontWeight = 'bold',
  fontSize = Math.floor(Math.min(width, height) * 0.2),
  textAdjust = Math.floor(fontSize * 0.4),
  bgColor = '#ddd',
  textColor = 'rgba(0,0,0,0.5)'
} = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect fill="${bgColor}" width="${width}" height="${height}"/>
    <text fill="${textColor}" font-family="${fontFamily}" font-size="${fontSize}" dy="${textAdjust}" font-weight="${fontWeight}" x="50%" y="50%" text-anchor="middle">${text}</text>
  </svg>`;
}

function encode(rendered) {
  // Thanks to: filamentgroup/directory-encoder
  const cleaned = rendered
    .replace(/[\n\r]/gim, '') // Strip newlines
    .replace(/\t/gim, ' ') // Replace tabs with strings
    .replace(/'/gim, '\\i'); // Normalize quotes
  const encoded = encodeURIComponent(cleaned)
    .replace(/\(/g, '%28') // Encode brackets
    .replace(/\)/g, '%29');
  return 'data:image/svg+xml;charset=US-ASCII,' + encoded;
}

/**
 * Return an inline SVG as a string suitable for including in an `<img>`
 * element's `src` attribute.
 *
 * @param {Number} width
 * @param {Number} [height] - Will default to the same number as width.
 * @param {String} [text] - Will default to the width and height.
 * @return {String}
 * @todo Consider breaking this into a Sindre Sorhus-style micro library?
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

  return encode(template(options));
};
