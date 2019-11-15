const gulp = require('gulp');
const fs = require('fs');
const inquirer = require('inquirer');
const slug = require('slug');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Prototype Title',
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
    message: 'Prototype Slug',
    default: function (answers) {
      return slug(answers.title).toLowerCase();
    },
    // TODO: Slug validation
  },
  {
    // TODO: Support multi-line input
    name: 'notes',
    type: 'input',
    message: 'Notes (optional)',
  },
];

gulp.task('newPrototype', cb => {
  return inquirer.prompt(questions).then(({title, slug, notes}) => {
    const prototypesRoot = 'src/prototypes/';
    const prototypesPath = `${prototypesRoot}/${slug}`;

    let markupFrontmatter = `---
title: ${title}
labels:
- wip
`;

if(notes) {
  markupFrontmatter += `
notes:
  ${notes}
`
}

markupFrontmatter += `
---
`.trim();

    if(!fs.existsSync(prototypesPath)) {
      fs.mkdirSync(prototypesPath);

      fs.writeFile(`${prototypesPath}/index.hbs`, markupFrontmatter, cb);
      fs.writeFile(`${prototypesPath}/styles.scss`, '', cb);
      fs.writeFile(`${prototypesPath}/functions.js`, '', cb);
    } else {
      console.error('Error: A prototype with that slug already exists.')

      cb();
    }
  });
});
