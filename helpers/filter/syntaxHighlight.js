const Prism = require('prismjs');
require('prismjs/components/prism-markup');
require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-handlebars');

/**
 * Custom helper to trim and highlight code examples
 */
module.exports = (code, language) => {
  if (language && code) {
    return Prism.highlight(code.trim(), Prism.languages[language], language);
  }

  return code;
};
