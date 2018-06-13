# MasterClass Components Library
### Goal
We build our UI using components. A web application is merely collections of components.

:a: + :b: ➟ :ab:

The goal of this library is to provide reusable components.


### Reusable Component
A component is composed by three things:
- Structure (HTML)
- Logic 🧠(Javascript)
- Style :nail_care:(CSS)

A component is consider **reusable** if it's usable in more than one context, or even better in any context.
However the component should be capable to be modified by the context(e.g: change the color of the button).

Non-reusable components won't be included in this library.

### Problems we want solve
- Duplicated components
- Versioning
- Inconsistency
- Nested components
- Slow UI implementation

### Impact
- Implement UI faster(even for developers that are not great at React) :zap:
- Update UI faster with versioning
- Less bugs :bug:
- Remove shared code from the main repository :recycle:

The impact will depend on how many reusable components we have.

To calculate this library's impact:

UI components = components + reusable-components

**impact** = UI components / reusable-components

### Downsides
- Slower component implementation
- Mantain repository
- Set up repository (done with mc-components)
- Publish it via npm (done with mc-components)

## Styling
- #### Inline styles
  - Modular :thumbsup:
  - Style limitations :thumbsdown: :thumbsdown:
- #### CSS-in-JS
  - Modular :thumbsup:
  - Lose css cascade (maybe good) 
  - No need to import CSS file :thumbsup:
  - Javascript flexibility :thumbsup:
  - No SCSS :thumbsdown:
- #### CSS with preprocessor SASS
  - SCSS advantages :thumbsup:
  - Devs used to SCSS :thumbsup:
  - Legacy SCSS styles :thumbsup:
  - Not modular :thumbsdown:

### Local vs External styles
If we decide to go with SCSS, then we need to decide if we add the styles locally or use an external library:
- #### Local styles:
  - Faster component implementation
  - Only components related styles
  - Export styles to be used for anyone

- #### External library:
  - Difficult to keep both libraries syncronized
  - Encapsulate ONLY styles in a library
  - External library could have components styles + other styles
  - Legacy styles
  
Another approach could be to use an external library and add missing styles locally. Once the local styles are stable we can move those styles to the external library

## Development

### When I should add a component to this library?
- Used more than once
- Doesn't depend on others non-reusable components

### Storybook
If we implement awesome components but we don't have a great documentation no one is going to find them.

Storybook is a tool to display the component in different contexts or stories.

- Start storybook
```
yarn storybook
```

The storybook is deployed to Github pages to be accessible for everyone. The storybook deployed should match with `develop` branch.

- Deploy storybook
```
yarn deploy-storybook
``` 

Each component must have a `.stories.js` extension file with all it's states.

### Styling
Assuming that we use SCSS to style the components...

Add at least the main class name used to the documentation.

Use **BEM methodology** to name the classes.

Try to keep everything as modular as possible.

### Documentation
Stroybook is a kind of documentation, but some component may need a more explained documentation.

To add documentation to a component, inside it's folder create a README.md file.

The documentation could include: usage, class names, prop types, or other relevant information.

### Testing
We use Jest and Ezyme to test our components.

Add a snapshoot for each component state. This will prevent to break a component state if we modify it.

If the component has logic, add unit tests for these flows.

### Versioning

- To create or update a component: patch version (`npm version patch`)
- With breaking changes: minor version (`npm version minor`)
- Production release: major version (`npm version major`)

For each version we need to add the release's notes [here](https://github.com/bernabe9/mc-components/releases)

### Publishing
Run the command: `npm publish`

## Usage
This section explains how is going to be the usage of this library

### Installation
`yarn add mc-components` or `npm install mc-components --save`

### Import styles and components

- Import MasterClass Components Stylesheet in your styles.scss file
```scss
@import '../node_modules/mc-components/lib/styles/index';
```
- Import a component
```javascript
import { Button } from 'mc-components'

const Container = () =>
  <Button primary>Hello</Button>
```

### Overriding Styles
Often, when we use components, we want to add paddings, margins, change colors, etc. Sometimes these changes can be made using component's props. If not, each component should have a class name so we can overriding it using SCSS.

Also, some components have styles or class names as props.

Example:

- Overriding styles with main class name
```javascript
<Button />
```

```scss
.mc-button {
 margin-top: 20px
}
```

- Overriding styles with inline sytles prop
```javascript
<Button style={{ marginTop: '20px' }}/>
```

- Overriding styles with a custom class name
```javascript
<Button className='custom-button'/>
```

```scss
.custom-button {
 margin-top: 20px
}
```
