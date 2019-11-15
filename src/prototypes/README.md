# Prototypes

This boilerplate includes scaffolding for a basic prototyping environment.


A prototype is composed of three pieces: a template file (`index.hbs`), a stylesheet (`styles.scss`), and a script file (`functions.js`).

```
prototypes
└── my-prototype             # Prototype directory
    ├── index.hbs            # Prototype handlebars template
    ├── styles.scss          # Prototype styles
    └── functions.js         # Prototype JavaScript 
```

If you include these three pieces and follow this naming convention an HTML page skeleton will be built that pulls in these assets and wraps your prototype content. A link to the prototype will automatically be added to this page.

This process can be streamlined by running the `npx gulp newPrototype` command in your terminal. This command will ask you for a title and slug and then scaffold out a new prototype for you.

## Prototype Frontmatter

In addition to the default [Eleventy Frontmatter](https://www.11ty.io/docs/data-frontmatter/), we've defined a few other options you can configure by setting them on your your `index.hbs` file.

1. `title`: Used in the browser tab and when the prototype is listed below.
2. `hide`: Prevent the prototype from being listed on this page.
3. `order`: Define the order of prototypes. Will fall back to sorting by file names if not set
4. `labels`: A list of labels to display on a prototype listing:
    - `wip`: A work in progress
    - `approved`: An approved prototype
    - `patternready`: A prototype that has been fully built with patterns and is ready to ship 
    - `archived`: An old prototype that will be removed soon.
