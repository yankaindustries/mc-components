# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)
[![CircleCI](https://circleci.com/gh/yankaindustries/mc-components.svg?style=shield)](https://circleci.com/gh/yankaindustries/mc-components)
[![Dependency Status](https://img.shields.io/david/yankaindustries/mc-components.svg)](https://david-dm.org/yankaindustries/mc-components)

mc-components aims to provide primitive components to build user interfaces in MasterClass.

## mc-components in your project
This component library is most easily imported as a dependency.  You can use `yarn` or `npm` to bring it in to your project.  This ensures all required `js` and styles are included.

`yarn add mc-components` or `npm install mc-components --save`

Our components do **not** contain any styles.  The style library must also be imported manually into your root `scss` file.

```scss
@import 'mc-components';
```

### Font files
We use Lato as our primary font for headings and body text in 300, 400, and 700 font weights.  You can import it in your css below, or import it into your asset pipeline.
```
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");
```

### Standalone style usage
If your project doesn't use yarn or npm for dependencies and you're only looking for masterclass css / style files, they can be imported manually by downloading the repository on github.  This will give you access to styles for buttons, the grid, typography, and more.  Save the contents of the `/dist/styles/scss/` folder to your own project, then import!

**Note**: If your project doesn't have sass processing, there is a plain css file you can import here:

```
/dist/styles/css/mc-components.css
```

### Using a component
```javascript
import { Button } from 'mc-components'

const Container = () =>
  <Button primary>Hello</Button>
```

# Contributing
1. Clone the repository
2. Install dependencies with `yarn install`
3. Create a branch off `develop`
4. Start storybook: `yarn start`

All changes are hot-reloaded and you'll be able to see components being modified live as you work.

## Submit your code
  - Create a PR with your changes
  - Once approved, it will be merged into develop and released with the next version bump.

For further information on linting, versioning, and releasing, please see the [wiki for documentation](https://github.com/yankaindustries/mc-components/wiki/Contributing)

## Storybook
Storybook provides a living version of the documentation for all components.  To update the [styleguide](https://yankaindustries.github.io/mc-components), run the following command from the root directory:

```
yarn deploy-storybook
```
