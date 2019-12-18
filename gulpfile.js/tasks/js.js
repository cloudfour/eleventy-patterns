var gulp = require('gulp');
var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

/**
 * A gulp task to process our javascript.
 *
 * This is a very basic setup. We'll likely want to configure this further.
 */
gulp.task('js', () => {
  return gulp
    .src('src/**/*.js')
    .pipe(
      rollup(
        {
          plugins: [babel(), nodeResolve(), commonjs()]
        },
        {
          format: 'iife'
        }
      )
    )
    .pipe(gulp.dest('dist'));
});
