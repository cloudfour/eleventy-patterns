const path = require('path');
const fg = require('fast-glob');
const fs = require('fs');
const Handlebars = require('handlebars');
const camelCase = require('camelcase');
const md = require('markdown-it')({ html: true });
const helpers = require('./helpers');

module.exports = eleventyConfig => {
  // Push images to the output folder
  eleventyConfig.addPassthroughCopy('src/**/*.(png|svg|gif|jpg|jpeg|ico)');

  // Make prototypes available as a collection
  eleventyConfig.addCollection('prototypes', function(collection) {
    return collection.getFilteredByGlob('src/prototypes/*/*.hbs');
  });

  // Make patterns available as collections
  eleventyConfig.addCollection('patterns', function(collection) {
    return collection.getFilteredByGlob('src/patterns/**/index.md');
  });
  eleventyConfig.addCollection('patternExamples', function(collection) {
    return collection.getFilteredByGlob('src/patterns/**/examples/**/*.hbs');
  });

  // Set our own Markdown library. We use the Eleventy default as a starting
  // point, but setting our own allows us to deviate and coordinate between
  // what Eleventy uses to compile templates and a filter we can use within
  // those same templates. Consistency FTW!
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdown', value => {
    // Only attempt to render strings to avoid errors
    if (typeof value === 'string') {
      return md.render(value);
    }

    return value;
  });

  // Register helpers
  Object.keys(helpers).forEach(group => {
    // Build method name from key (filter -> addFilter)
    const method = `add${camelCase(group, { pascalCase: true })}`;

    // If that method doesn't exist, skip this helper group
    if (typeof eleventyConfig[method] !== 'function') {
      return;
    }

    // Loop through every function in this group and add it as that helper
    Object.keys(helpers[group]).forEach(name => {
      eleventyConfig[method](name, helpers[group][name]);
    });
  });

  // Register handlebars partials
  fg.sync('src/patterns/**/partials/**/*.hbs').forEach(file => {
    const partial = fs.readFileSync(file, 'utf8');
    const pathSegments = file.split('/');
    let key = pathSegments[pathSegments.length - 1];
    key = key.replace(path.extname(file), '');
    Handlebars.registerPartial(key, partial);
  });

  // Set input and output folders
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
