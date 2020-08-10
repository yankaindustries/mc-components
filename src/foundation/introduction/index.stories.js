import React from 'react'
import { storiesOf } from '@storybook/react'
import Highlight from 'react-highlight'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import packageJSON from '../../../package.json'


storiesOf('Introduction|Introduction', module)
  .add('Getting Started', () =>
    <div className='container'>
      <DocHeader
        title='mc-ui'
        description='UI library for for media heavy applications.'
      />

      <p>Version: {packageJSON.version}</p>

      <DocSection title='Installation'>
        <p className='mc-mb-2'>
          This library is available as an
          {' '}
          <a
            className='mc-text--link'
            href='//npmjs.org/package/mc-ui'
          >
            NPM package
          </a>
        </p>

        <Highlight className='language-bash mc-mb-8'>
          yarn add mc-ui
        </Highlight>
      </DocSection>

      <DocSection title='Usage'>
        <p className='mc-mb-2'>
          SCSS
        </p>

        <Highlight className='language-scss mc-mb-8'>
          {'@import \'mc-ui/styles\''}
        </Highlight>

        <p className='mc-mb-2'>
          Sometimes you&apos;ll need to reference color variables
          or breakpoints. You can import the &ldquo;base&rdquo; SCSS
          file (which does not add any weight to your page) like so:
        </p>

        <Highlight className='language-scss mc-mb-8'>
          {'@import \'mc-ui/styles/base\''}
        </Highlight>

        <p className='mc-mb-2'>
          JSX
        </p>

        <Highlight className='language-jsx mc-mb-8'>
{`import React from 'react'
import { Button } from 'mc-ui'

const App = () => (
  <Button>
    Hello World
  </Button>
)`}
        </Highlight>
      </DocSection>
    </div>,
  )
