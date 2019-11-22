const gulp = require('gulp');
const browserSync = require('browser-sync').get(
  require('../../package.json').name
);

gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    // eslint-disable-next-line unicorn/prevent-abbreviations
    server: { baseDir: './dist' }
  });
});
