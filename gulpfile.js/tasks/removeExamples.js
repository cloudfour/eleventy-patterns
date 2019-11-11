const gulp = require('gulp');
const del = require('del');
const fg = require('fast-glob');


gulp.task('removeExamples', async cb => {
  console.log( fg.sync('src/@(patterns|prototypes)/**/**') );

  await del(['src/@(patterns|prototypes)/!(index.hbs)', '!public/assets']);

  cb();
});


