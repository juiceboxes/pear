# juiceboxes/pear

react components

## Usage

npm install: `npm install @juiceboxes/pear`

### Imports

Component
`import { Component } from 'node_modules/@juiceboxes/pear`

SCSS
`@import '~@juiceboxes/pear/index.css';`

## Development

Create a component inside of the PresentationalComponent folder

Structure

```bash
PresentationalComponents
└───YourComponent
    ├─── index.js
    ├─── YourComponent.js
    └─── your-component.scss
```

Build: `npm run build`
Test: `npm run test`

There is also a playground for any development
`npm run playground`

## Documentation Links

* Components
  * [Sample Component](doc/components/sample.md)

## Conbribution

### Adding to index.js

Make sure that when you finish your component, you import it in the src/index.js file

If you're using any kind of pixel variable, be sure to use the px converter inside the Utilities
