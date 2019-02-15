import React from 'react'
import { storiesOf } from '@storybook/react'
import Highlight from 'react-highlight'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


storiesOf('Introduction', module)
  .add('Getting Started', () =>
    <div className='container'>
      <DocHeader
        title='mc-components'
        description='UI library for for media heavy applications.'
      />

      <DocSection title='Installation'>
        <p className='mc-mb-2'>
          This library is available as an
          {' '}
          <a
            className='mc-text--link'
            href='http://npm.com/package/mc-components'
          >
            NPM package
          </a>
        </p>

        <Highlight className='language-bash mc-mb-8'>
          yarn add mc-components
        </Highlight>
      </DocSection>

      <DocSection title='Usage'>
        <p className='mc-mb-2'>
          SCSS
        </p>

        <Highlight className='language-scss mc-mb-8'>
          {'@import \'mc-components/src/styles/index\''}
        </Highlight>

        <p className='mc-mb-2'>
          JSX
        </p>

        <Highlight className='language-jsx mc-mb-8'>
  {`import React from 'react'
  import { Button } from 'mc-components'

  const App = () => (
    <Button>
      Hello World
    </Button>
  )`}
        </Highlight>
      </DocSection>
    </div>,
  )
