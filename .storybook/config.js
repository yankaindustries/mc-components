import { addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'

import './styles.scss'

const categories = [
  'Introduction',
  'Foundation',
  'Components',
  'Utilities',
  'Playground',
  'Experimental',
]


addParameters({
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sortStoriesByKind: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    selectedAddonPanel: 'mc/props/panel',
    storySort: (a, b) => {
      // // a[1].kind === b[1].kind
      // //   ? 0
      // //   : a[1].id.localeCompare(b[1].id, { numeric: true }),

      const aIndex = categories.indexOf(a[1].kind.split('|')[0])
      const bIndex = categories.indexOf(b[1].kind.split('|')[0])

      if (aIndex === bIndex) {
        return 0
      }

      return aIndex - bIndex
    }
  },
})


const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
