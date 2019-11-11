const gulp = require('gulp');
const del = require('del');
const replace = require('replace-in-file');
/**
 * A task to remove our example pattern and prototype.
 * This can be run from the command line with `npx gulp removeExamples`
 * This should not be run if you've already been making your own modifications,
 * as this may interfere with them.
 */
gulp.task('removeExamples', async cb => {
  // Delete the directories of the example content
  await del([
    'src/patterns/pattern-template',
    'src/prototypes/prototype-example',
  ]);

  // This JavaScript is imported into a bundle. We need remove that import
  // statement.
  await replace({
    files: 'src/scripts/toolkit.js',
    from: "import '../patterns/pattern-template/pattern-template.js';",
    to: "",
  });

  cb();
});


