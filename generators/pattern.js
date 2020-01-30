const fs = require('fs');
const inquirer = require('inquirer');
const slug = require('slug');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Pattern Title',
    validate: function(input) {
      if (input.trim().length > 0) {
        return true;
      }

      return 'Please enter a title.';
    }
  },
  {
    name: 'slug',
    type: 'input',
    message: 'Pattern Slug',
    default: function(answers) {
      return slug(answers.title).toLowerCase();
    }
    // TODO: Slug validation
  },
  {
    name: 'notes',
    type: 'input',
    message: 'Pattern Notes (optional)'
  },
  {
    name: 'docTitle',
    type: 'input',
    message: 'Documentation File Title'
  },
  {
    name: 'docSlug',
    type: 'input',
    message: 'Documentation File Slug',
    default: function(answers) {
      return slug(answers.docTitle).toLowerCase();
    }
    // TODO: Slug validation
  },
  {
    name: 'docNotes',
    type: 'input',
    message: 'Documentation File Notes (optional)'
  },
  {
    name: 'includeJS',
    type: 'confirm',
    message: 'Include a JavaScript file?'
  }
];

exports.default = async callback => {
  return inquirer
    .prompt(questions)
    .then(({ title, slug, notes, docTitle, docSlug, docNotes, includeJS }) => {
      const patternsRoot = 'src/patterns/';
      const patternsPath = `${patternsRoot}/${slug}`;

      const markdownFileContent = `
---
title: ${title}
layout: layouts/pattern
---

${notes}
`.trim();

      const documentContent = `
---
title: ${docTitle}
layout: layouts/pattern-example
notes:
  ${docNotes}
---

{{>${slug}}}
`.trim();

      const examplesJson = `
{
"layout": "layouts/pattern-example--iframed.hbs"
}
`;

      if (fs.existsSync(patternsPath)) {
        console.error('Error: A pattern with that slug already exists.');

        callback();
      } else {
        fs.mkdirSync(patternsPath);

        // Create our main documentation file and our CSS/JS assets
        fs.writeFile(`${patternsPath}/index.md`, markdownFileContent, callback);
        fs.writeFile(`${patternsPath}/${slug}.scss`, '', callback);
        if (includeJS) {
          fs.writeFile(`${patternsPath}/${slug}.js`, '', callback);
        }

        // Create our pattern partial
        fs.mkdirSync(`${patternsPath}/partials`);
        fs.writeFile(`${patternsPath}/partials/${slug}.hbs`, '', callback);

        // Create a documentation file
        fs.mkdirSync(`${patternsPath}/examples`);
        fs.writeFile(
          `${patternsPath}/examples/${docSlug}.hbs`,
          documentContent,
          callback
        );

        fs.writeFile(
          `${patternsPath}/examples/examples.json`,
          examplesJson,
          callback
        );
      }
    });
};
