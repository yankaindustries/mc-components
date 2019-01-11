import React from 'react'
import Highlight from 'react-highlight'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


const GettingStarted = () =>
  <div className='container'>
    <DocHeader
      title='mc-components'
      description='Luxe UI library for for media heavy applications.'
    />

    <DocSection title='Installation'>
      <p className='mcb-space-2'>
        This library is available as an
        {' '}
        <a
          className='mc-text-link'
          href='http://npm.com/package/mc-components'
        >
          NPM package
        </a>
      </p>

      <Highlight className='language-bash mcb-space-8'>
        yarn add mc-components
      </Highlight>
    </DocSection>

    <DocSection title='Usage'>
      <p className='mcb-space-2'>
        SCSS
      </p>

      <Highlight className='language-scss mcb-space-8'>
        {'@import \'mc-components/src/styles/index\''}
      </Highlight>

      <p className='mcb-space-2'>
        JSX
      </p>

      <Highlight className='language-jsx mcb-space-8'>
{`import React from 'react'
import { Button } from 'mc-components'

const App = () => (
  <Button primary>
    Hello World
  </Button>
)`}
      </Highlight>
    </DocSection>
  </div>


export default GettingStarted
