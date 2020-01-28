const gulp = require('gulp');
const generators = require('../../generators').default;
const inquirer = require('inquirer');

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

gulp.task('new', callback => {
  inquirer.prompt(questions).then(({ type }) => {
    return generators[type].default(callback);
  });
});
