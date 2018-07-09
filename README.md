# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)
[![CircleCI](https://circleci.com/gh/bernabe9/mc-components.svg?style=shield)](https://circleci.com/gh/bernabe9/mc-components)
[![Build status: Linux](https://travis-ci.org/bernabe9/mc-components.svg?branch=master)](https://travis-ci.org/bernabe9/mc-components)
[![Dependency Status](https://img.shields.io/david/bernabe9/mc-components.svg)](https://david-dm.org/bernabe9/mc-components)

mc-components aims to provide primitive components to build user interfaces in MasterClass.

## mc-components in your project
This component library is most easily imported as a dependency.  You can use `yarn` or `npm` to bring it in to your project.  This ensures all required `js` and styles are included.

`yarn add mc-components` or `npm install mc-components --save`

### Standalone styles
If your project doesn't use npm for dependencies and you're only looking for masterclass css / style files, they can be imported manually by downloading the repository on github.  This will give you access to styles for buttons, the grid, typography, and more.

```scss
@import '../node_modules/mc-components/dist/styles/scss/index';
```

**Note**: If your project doesn't have asset compilation or sass processing, you can also import the compiled css manually like so:

```css
@import '../node_modules/mc-components/dist/styles/css/mastersass.css';
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
3. Start storybook: `yarn start`

All changes are hot-reloaded and you'll be able to see components being modified live as you work.

## Linting
Your code will be linted automatically when you make a commit.  If you'd like to run the linter manually, you can use the following commands.

- `yarn lint:style` (runs style linter only)
- `yarn lint:js` (runs JS linter only)
- `yarn lint` (runs both JS and CSS linter)

## Versioning
### If you're a developer
  - Create a branch off `develop`
  - Create a PR with your changes
  - Get the PR approved, and it will be merged into develop to be release with the next version bump.

### If you're a release manager
When a new version is ready to be released, run `npm version` from the current `develop` branch (make sure to pull all changes!).  When run, `npm version` will:
- Run the test suite
- Build all necessary files for distribution
- Version the `package.json file`
- Push a release tag to the `develop` branch on github
- Publish this release to `npmjs.org`

Once complete, please manually create a PR from `develop` to `master` with these new changes, and publish a "release" with notes.

## Documentation
Storybook provides a living version of the documentation for all components.  To update the [styleguide](https://yankaindustries.github.io/mc-components), run the following command from the root directory:

```
yarn deploy-storybook
```
