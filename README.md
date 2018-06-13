# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)
[![CircleCI](https://circleci.com/gh/bernabe9/mc-components.svg?style=shield)](https://circleci.com/gh/bernabe9/mc-components)
[![Build status: Linux](https://travis-ci.org/bernabe9/mc-components.svg?branch=master)](https://travis-ci.org/bernabe9/mc-components)
[![Dependency Status](https://img.shields.io/david/bernabe9/mc-components.svg)](https://david-dm.org/bernabe9/mc-components)

mc-components aims to provide primitive components to build user interfaces in MasterClass

## Installation
`yarn add mc-components` or `npm install mc-components --save`

## Usage

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

## Development

1. Clone the repository
2. Install dependencies: `yarn`
3. Start the storybook: `yarn storybook`
