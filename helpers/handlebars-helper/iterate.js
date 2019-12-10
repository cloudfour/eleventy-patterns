const Handlebars = require('handlebars');

/**
 * Repeat a block a given amount of times.
 *
 * @credit https://github.com/fbrctr/fabricator-assemble
 * @example
 * {{#iterate 10}}
 *   <li>Index: {{@index}} Count: {{@count}}</li>
 * {{/iterate}}
 */

module.exports = function (num, block) {
  let result = '';

  for (let i = 0; i < num; i++) {
    let data = Handlebars.createFrame(block.data || {});
    data.index = i;
    data.count = i + 1;
    result += block.fn(i, { data });
  }

  return result;
}