# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)
[![CircleCI](https://circleci.com/gh/yankaindustries/mc-components.svg?style=shield)](https://circleci.com/gh/yankaindustries/mc-components)
[![Dependency Status](https://img.shields.io/david/yankaindustries/mc-components.svg)](https://david-dm.org/yankaindustries/mc-components)

mc-components aims to provide primitive components to build user interfaces in MasterClass.

## Getting Started
This component library is most easily imported as a dependency.  You can use `yarn` or `npm` to bring it in to your project.  This ensures all required `js` and styles are included.

```bash
yarn add mc-components
```

### Components
```javascript
import { Button } from 'mc-components'

const Container = () =>
  <Button primary>Hello</Button>
```

### Styles

The style library must also be imported manually into your root `SCSS` file.

```scss
@import 'mc-components/dist/styles/scss/index'
```

We use Lato as our primary font for headings and body text.  You can import it in your CSS below, or import it into your asset pipeline.

```scss
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700")
```

# Development

`mc-components` utilizes [Storybook](https://storybook.js.org/), which provides a living version of the documentation for all components.

```bash
yarn install
yarn start
```

If you want to develop in `mc-components` and see changes compiled into your own project you can utilize `yarn link` and the `dev` script:

```bash
# mc-components
yarn link
yarn dev

# other project
yarn link mc-components
```

To get back to an officially released version, run this in your project:

```bash
yarn unlink mc-components
yarn install
```

To update the [live documentation](https://yankaindustries.github.io/mc-components), run the following command from the root directory:

```bash
yarn deploy
```

## PRs Welcome
  - Create a PR with your changes
  - Once approved, it will be merged into develop and released with the next version bump.

For further information on linting, versioning, and releasing, please see the [wiki for documentation](https://github.com/yankaindustries/mc-components/wiki/Contributing)
