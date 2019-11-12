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