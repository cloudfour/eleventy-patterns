const gulp = require('gulp');
const fs = require('fs');
const inquirer = require('inquirer');
const slug = require('slug');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Pattern Title',
    validate: function (input) {
      if (input.trim().length) {
        return true;
      }
      
      return 'Please enter a title.';
    }
  },
  {
    name: 'slug',
    type: 'input',
    message: 'Pattern Slug',
    default: function (answers) {
      return slug(answers.title).toLowerCase();
    },
    // TODO: Slug validation
  },
  {
    name: 'notes',
    type: 'input',
    message: 'Pattern Notes (optional)',
  },
  {
    name: 'docTitle',
    type: 'input',
    message: 'Documentation File Title',
  },
  {
    name: 'docSlug',
    type: 'input',
    message: 'Documentation File Slug',
    default: function (answers) {
      return slug(answers.docTitle).toLowerCase();
    },
    // TODO: Slug validation
  },
  {
    name: 'docNotes',
    type: 'input',
    message: 'Documentation File Notes (optional)',
  },
  {
    name: 'includeJS',
    type: 'confirm',
    message: 'Include a JavaScript file?',
  },
];

gulp.task('newPattern', cb => {
  return inquirer.prompt(questions).then(({title, slug, notes, docTitle, docSlug, docNotes, includeJS}) => {
    const patternsRoot = 'src/patterns/';
    const patternsPath = `${patternsRoot}/${slug}`;

    const markdownFileContent = `
---
title: ${title}
layout: layouts/pattern
---

${notes}
`.trim();

const docContent = `
---
title: ${docTitle}
layout: layouts/pattern-example
notes: 
  ${docNotes}
---

{{>${slug}}}
`.trim();

    if(!fs.existsSync(patternsPath)) {
      fs.mkdirSync(patternsPath);

      // Create our main documentation file and our CSS/JS assets
      fs.writeFile(`${patternsPath}/index.md`, markdownFileContent, cb);
      fs.writeFile(`${patternsPath}/${slug}.scss`, '', cb);
      if(includeJS) {
        fs.writeFile(`${patternsPath}/${slug}.js`, '', cb);
      }

      // Create our pattern partial
      fs.mkdirSync(`${patternsPath}/partials`);
      fs.writeFile(`${patternsPath}/partials/${slug}.hbs`, '', cb);

      // Create a documentation file
      fs.mkdirSync(`${patternsPath}/examples`);
      fs.writeFile(`${patternsPath}/examples/${docSlug}.hbs`, docContent, cb);
    } else {
      console.error('Error: A pattern with that slug already exists.')

      cb();
    }
  });
});
