import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import { backgrounds, StoryWrapper } from './decorators'

import './styles.scss'
import 'highlight.js/styles/github-gist.css'

// Option Defaults
setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// Info Defaults
setDefaults({
  header: false,
  inline: true,
})

// Global Decorators
addDecorator(backgrounds)
addDecorator(StoryWrapper)

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
