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

Creating patterns can be streamlined by running `npx gulp newPattern` in your terminal. This will ask you a few questions, and then scaffold out the files required for your new pattern.