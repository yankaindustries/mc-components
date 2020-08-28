# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)
[![CircleCI](https://circleci.com/gh/yankaindustries/mc-components.svg?style=shield)](https://circleci.com/gh/yankaindustries/mc-components)
[![Dependency Status](https://img.shields.io/david/yankaindustries/mc-components.svg)](https://david-dm.org/yankaindustries/mc-components)

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

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

Masterclass uses the licensed font "Sohne" as its primary font for headings and body text. You can replace the references to this font stack by updating the `$mc-font-default` variable in the style variables file.

```scss
src/styles/base/variables.scss
```

# Development

If you'd like to contribute to `mc-components`, please read the docs on [our principles](https://github.com/yankaindustries/mc-components/wiki/Component-Principles) to get familiar with the concepts that are the foundation for the component library.  After making contributions, we also have docs on how to [version, release and deploy](https://github.com/yankaindustries/mc-components/wiki/Version,-Release,-and-Deploy) if you are part of the team that can do so.

`mc-components` utilizes [Storybook](https://storybook.js.org/), which provides a living version of the documentation for all components.

```bash
yarn install
yarn start
```

If you want to develop in `mc-components` and see changes compiled into your own project you can utilize `yarn link` and the `dev` script:

### Inside of the mc-components directory
```bash
# Inside mc-components directory!
yarn link
yarn dev
```

### From your other project directory
(For Masterclass employees, this is the masterclass directory):
```bash
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
