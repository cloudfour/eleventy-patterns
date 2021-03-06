const gulp = require('gulp');
const requireDir = require('require-dir');

require('browser-sync').create(require('../package.json').name);

requireDir('./cli');
requireDir('./tasks');

gulp.task('watch', () => {
  // Templates + static content
  gulp.watch(['**/*.(hbs|md)'], gulp.series('content', 'reload'));
  // CSS
  gulp.watch('src/**/*.scss', gulp.series('css', 'reload'));
  // JS
  gulp.watch('src/**/*.js', gulp.series('js', 'reload'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('content', 'css', 'js')));

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
