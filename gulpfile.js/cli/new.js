const gulp = require('gulp');
const generators = require('../../generators').default;
const inquirer = require('inquirer');
// Pull in any params passed to this CLI command
// @see https://github.com/substack/minimist#example
const argv = require('minimist')(process.argv.slice(2));

const questions = [
  {
    name: 'type',
    type: 'input',
    message: 'Would you like to make a pattern or a prototype?',
    validate: function(input) {
      if (input === 'pattern' || input === 'prototype') {
        return true;
      }

      return 'Please enter either "pattern" or "prototype".';
    }
  }
];

const callGenerator = (type, callback) => {
  return generators[type].default(callback);
};

gulp.task('new', callback => {
  if (typeof generators[argv.type] !== 'undefined') {
    return callGenerator(argv.type, callback);
  }

  inquirer.prompt(questions).then(({ type }) => {
    return callGenerator(type, callback);
  });
});
