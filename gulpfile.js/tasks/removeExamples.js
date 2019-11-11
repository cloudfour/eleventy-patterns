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

  // These files are imported into our bundles. We need remove those import
  // statements. We do this by replacing the import lines in those bundles
  await replace({
    files: 'src/scripts/toolkit.js',
    from: "import '../patterns/pattern-template/pattern-template.js';",
    to: "",
  });
  await replace({
    files: 'src/styles/toolkit.scss',
    from: '@import "../patterns/pattern-template/pattern-template.scss";',
    to: "",
  });

  cb();
});


