var gulp = require('gulp');
var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');
const globImport = require('rollup-plugin-glob-import');

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
          plugins: [babel(), globImport()]
        },
        {
          format: 'iife'
        }
      )
    )
    .pipe(gulp.dest('dist'));
});
