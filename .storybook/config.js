import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './styles.scss'
import 'highlight.js/styles/tomorrow-night.css'

// Option Defaults
setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true,
  showAddonPanel: false,
  addonPanelInRight: true,
  // selectedAddonPanel: 'mc/props/panel',
});

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
