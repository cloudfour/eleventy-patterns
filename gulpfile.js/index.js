const gulp = require('gulp');
const requireDir = require('require-dir');

require('browser-sync').create(require('../package.json').name);

requireDir('./tasks');

gulp.task('watch', () => {
  // Templates + static content
  gulp.watch(
    ['src/**',],
    gulp.series('content', 'reload')
  );
  // CSS
  gulp.watch('./**/*.scss', gulp.series('css', 'reload'));
});

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('content', 'css'))
);

/**
 * Include all tasks within the subdirectory automatically. This keeps each
 * task (and its dependencies) organized and easy to find and update.
 */

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
