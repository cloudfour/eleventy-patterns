const gulp = require('gulp');
var fs = require('fs');

gulp.task('newPrototype', cb => {
  const title = "Test Title";
  const prototypesRoot = 'src/prototypes/';
  const slug = 'test-title';
  const prototypesPath = `${prototypesRoot}/${slug}`

  const markupFrontmatter = `
---
title: ${title}
---
`.trim();

  if(!fs.existsSync(prototypesPath)) {
    fs.mkdirSync(prototypesPath);

    fs.writeFile(`${prototypesPath}/index.hbs`, markupFrontmatter, cb);
    fs.writeFile(`${prototypesPath}/styles.scss`, '', cb);
    fs.writeFile(`${prototypesPath}/functions.js`, '', cb);
  } else {
    console.error('Error: A prototype with that slug already exists.')

    cb();
  }
});
