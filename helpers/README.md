# helpers

This directory includes any helper functions you want to expose to templates. These may include [filters](https://www.11ty.dev/docs/filters/), [shortcodes](https://www.11ty.dev/docs/shortcodes/) or [custom tags](https://www.11ty.dev/docs/custom-tags/).

Each folder corresponds to a type of helper supported by Eleventy. Each file within corresponds to a single helper.

For example, the following directory:

```
helpers
├── filter
│   └── sortCollection.js
├── handlebars-helper
│   └── iterate.js
├── liquid-tag
│   └── svg.js
└── shortcode
    └── user.js
```

Is equivalent to the following:

```js
eleventyConfig.addFilter('sortCollection', ...);
eleventyConfig.addHandlebarsHelper('iterate', ...);
eleventyConfig.addLiquidTag('svg', ...);
eleventyConfig.addShortcode('user', ...);
```