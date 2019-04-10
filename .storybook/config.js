import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './styles.scss'
import 'highlight.js/styles/tomorrow-night.css'

// Option Defaults
setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true,
  showAddonPanel: true,
  addonPanelInRight: true,
  selectedAddonPanel: 'mc/props/panel',
});

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  // Force the introduction to load first!
  require('../src/foundation/introduction/index.stories.js');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
