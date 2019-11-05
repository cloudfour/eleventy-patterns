# Eleventy Patterns

**(WIP)** A basic JAMStack setup with Eleventy and Gulp. I commonly end up scaffolding similar patterns. This includes some of that work to make starting other projects quicker.

This supports a pattern library and a prototyping environment. It can easily be 
expanded to provide areas for other content types...

It uses handlebars for templating, Sass for CSS processing, and Rollup for javascript transpilation and bundling.

You're not meant to include this as a module. Instead, use this as a [template repository](https://css-tricks.com/using-github-template-repos-to-jump-start-static-site-projects/) and then tweak it to fit your needs. This makes it easier to directly edit the configuration without this project acting as a middleman between you and your config files.

## Getting Started

Once you've copied this project run the following commands to start working on your project:

1. `npm ci` — install necessary dependencies
2. `npm start` — Compile the project, start a server, and watch for updates

## TODO

1. Improve rollup configuration
2. Add service worker/PWA support — probably workbox
3. Better default styles
4. Better navigation (+ small screen nav)
5. Linting
6. Common hbs helpers
7. Code 
  - code indentation
  - HBS code examples