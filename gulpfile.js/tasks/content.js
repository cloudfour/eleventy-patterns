const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('content', shell.task('npx eleventy --quiet'));