# Patterns

This boilerplate includes scaffolding for a basic pattern library.

A pattern consists of a few pieces:

- One or more handlebars partials in a `partials` directory.
- An SCSS file defining styles for the pattern.
- An `index.md` file describing your pattern.
- One or more handlebars examples showing the pattern, in an `examples` directory.

```
patterns
└── my-pattern                   # Pattern directory
    ├── index.md                 # Primary pattern documentation file
    ├── my-pattern.scss          # Pattern styles
    ├── my-pattern.js            # Pattern JavaScript
    ├── examples                 # Directory holding implementation examples with notes
    │   └── implementation.hbs   # One or more implementation examples
    └── partials                 # Directory holding the pattern markup
        └── my-pattern.hbs       # One or more chunks of pattern markup
```

By including all of these pieces, you get the following:

- You can include your pattern as a handlebars partial.
- The pattern styles are imported into your primary stylesheet.
- Documentation for your new pattern.

Creating patterns can be streamlined by running `npm run new pattern` in your terminal. This will ask you a few questions, and then scaffold out the files required for your new pattern.

## Pattern Frontmatter

In addition to the default [Eleventy Frontmatter](https://www.11ty.io/docs/data-frontmatter/), we've defined a few other options you can configure by setting them on your your `index.md` file.

1. `title`: Used in the browser tab and when the pattern is listed below or in the sidebar.
2. `hide`: Prevent the pattern from being listed on this page or in the sidebar.
3. `order`: Define the order of patterns. Will fall back to sorting by file names if not set

## Pattern Example Frontmatter

Pattern example files can also use frontmatter to control their display:

1. `title`: Displayed above the example
2. `order`: Define the order of examples. Will fall back to sorting by file names if not set
3. `iFrameExample`: Display the example in an iFrame. Can be useful for responsive or full screen patterns.
