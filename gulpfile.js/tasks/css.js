const gulp = require('gulp');
const sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

sass.compiler = require('node-sass');
 
gulp.task('css', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});