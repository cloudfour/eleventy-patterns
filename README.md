# Eleventy Patterns

**(WIP)** A pattern library and prototyping environment, built with [Eleventy](https://www.11ty.io/) and [Gulp](https://gulpjs.com/). It uses [Handlebars](https://handlebarsjs.com/) for templating, [Sass](https://sass-lang.com/) for CSS processing, and [Rollup](https://rollupjs.org/) for javascript transpilation and bundling.

You're not meant to include this as a module. Instead, use this as a [template repository](https://css-tricks.com/using-github-template-repos-to-jump-start-static-site-projects/) and then tweak it to fit your needs. This makes it easier to directly edit the configuration without this project acting as a middleman between you and your config files.

This project includes some custom CLI commands to help you quickly iterate and scaffold out new patterns and prototypes.

## Getting Started

Once you've copied this project, run the following commands to get up and running:

### Installation

1. `npm ci` — Install necessary dependencies.
2. `npm start` — Compile the project, start a server, and watch for updates.
3. Review the [pattern](/patterns) and [prototype](/prototypes) examples to get a feel for the site structure and scaffolding.
4. `npm run removeExamples` — Delete the example pattern and prototype. **Use caution if you've made changes of your own! This will remove and modify files.**
5. `npm run new prototype` — Create your first prototype! This command will scaffold out all the files necessary for a new prototype
6. `npm run new pattern` — Create your first pattern! This command will scaffold out all the files necessary for a new pattern
