---
title: Pattern Template
layout: layouts/pattern
---

Here's an example of how to scaffold out a new pattern. 

A pattern consists of a few pieces:
- One or more handlebars partials in a `partials` directory.
- An SCSS file defining styles for the pattern (this will need to be imported into `src/styles/styles.scss`).
- An `index.md` file describing your pattern.
- One or more handlebars examples showing the pattern, in an `examples` directory.

By including all of these pieces, you get the following:
- You can include your pattern as a handlebars partial.
- The pattern styles are imported into your primary stylesheet.
- Documentation for your new pattern.