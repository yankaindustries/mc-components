import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import Background from '../Background'
import Badge from '../Badge'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('components|Background', module)
  .add('Background', withProps(Background)(() => (
    <div className='container'>
      <h2 className='mc-text-h2'>
        Background
        <Badge count='Experimental' />
      </h2>

      <DocSection title='Examples'>
        <CodeExample>
          <Background
            element={<img src={shondaRhimesThumbnail} />}
            fit='content'
            position='center top'
            size='cover'
          >
            <br /><br /><br />
            <div className='row'>
              <div className='col-4 offset-1'>
                <h2 className='mc-text-h2'>
                  Some Title
                </h2>

                <p>
                  A lot of information about cool things that you should like.
                </p>
              </div>
            </div>
            <br /><br /><br />
          </Background>
        </CodeExample>

        <CodeExample>
          <Background
            element={<img src={shondaRhimesThumbnail} />}
            fit='content'
            position='right center'
            size='contain'
          >
            <br /><br /><br />
            <div className='row'>
              <div className='col-4 offset-1'>
                <h2 className='mc-text-h2'>
                  Some Title
                </h2>

                <p>
                  A lot of information about cool things that you should like.
                </p>
              </div>
            </div>
            <br /><br /><br />
          </Background>
        </CodeExample>

        <CodeExample>
          <Background
            element={<img src={shondaRhimesThumbnail} />}
            fit='background'
            position='center bottom'
            size='contain'
          >
            <br /><br /><br />
            <div className='row'>
              <div className='col-4 offset-1'>
                <h2 className='mc-text-h2'>
                  Some Title
                </h2>

                <p>
                  A lot of information about cool things that you should like.
                </p>
              </div>
            </div>
            <br /><br /><br />
          </Background>
        </CodeExample>
      </DocSection>
    </div>
  )))
