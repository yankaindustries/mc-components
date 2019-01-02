import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './styles.scss'
import 'highlight.js/styles/tomorrow-night.css'

// Option Defaults
setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  addonPanelInRight: true,
  selectedAddonPanel: 'mc/props/panel',
  sortStoriesByKind: true,
});

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
