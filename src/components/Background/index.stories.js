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
      <div className='example__heading'>
        <h1 className='mc-text-h1'>
          Background
          {' '}
          <Badge count='Experimental' />
        </h1>
      </div>

      <div className='row'>
        <div className='col-lg-6'>
          <DocSection title='Colors'>
            <CodeExample>
              <Background color='light'>
                <br />
                <br />
                <br />
              </Background>
            </CodeExample>

            <CodeExample>
              <Background color='medium'>
                <br />
                <br />
                <br />
              </Background>
            </CodeExample>

            <CodeExample>
              <Background color='dark'>
                <br />
                <br />
                <br />
              </Background>
            </CodeExample>
          </DocSection>
        </div>

        <div className='col-lg-6'>
          <DocSection title='Images'>
            <CodeExample>
              <Background
                element={<img src={shondaRhimesThumbnail} />}
                fit='content'
                position='center top'
                size='cover'
              >
                <br />
                <div className='row'>
                  <div className='col-4 offset-1'>
                    <h2 className='mc-text-h2'>
                      Fit Content: Cover
                    </h2>

                    <p>
                      The background element is scaled to fill the entire
                      area behind the content, from the specified position.
                    </p>
                  </div>
                </div>
                <br />
              </Background>
            </CodeExample>

            <CodeExample>
              <Background
                element={<img src={shondaRhimesThumbnail} />}
                fit='content'
                position='right center'
                size='contain'
              >
                <br />
                <div className='row'>
                  <div className='col-4 offset-1'>
                    <h2 className='mc-text-h2'>
                      Fit Content: Contain
                    </h2>

                    <p>
                      The background element is scaled to fit within the
                      area behind the content, pinned to a specified position.
                    </p>
                  </div>
                </div>
                <br />
              </Background>
            </CodeExample>

            <CodeExample>
              <Background
                element={<img src={shondaRhimesThumbnail} />}
                fit='background'
                position='center bottom'
                size='contain'
              >
                <br />
                <div className='row'>
                  <div className='col-4 offset-1'>
                    <h2 className='mc-text-h2'>
                      Fit Background: Contain
                    </h2>

                    <p>
                      The background element decides the size of the container,
                      with the content sitting above it and pinned to a
                      specific position.
                    </p>
                  </div>
                </div>
                <br />
              </Background>
            </CodeExample>
          </DocSection>
        </div>
      </div>
    </div>
  )))
