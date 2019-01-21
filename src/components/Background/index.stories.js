import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import PropExample from '../../utils/PropExample'

import Background from './index'
import Badge from '../Badge'

import thomasKellerBackground from '../../utils/thomas-keller.jpg'
import abstractBackground from '../../utils/abstract-background.jpg'
import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('Components|Background', module)
  .add('Summary', withProps(Background)(() => (
    <div>
      <div className='container'>
        <div className='example__heading'>
          <div className='row'>
            <div className='col-6'>
              <h1 className='mc-text-h1'>
                Background
                {' '}
                <Badge count='Experimental' />
              </h1>
              <p className='mc-text-large mc-text--muted'>
                Somewhat a utility component, Background is to be used when
                you need to generally apply a background color, image, or
                some general elements behind content.
              </p>
            </div>
          </div>
        </div>

        <DocSection title='Demo'>
          <CodeExample>
            <Background
              element={<img src={thomasKellerBackground} />}
              fit='background'
              position='right center'
              size='contain'
              color='light'
              className='mc-invert'
            >
              <br />
              <br />
              <div className='row'>
                <div className='col-5 offset-1'>
                  <h2 className='mc-text-h2'>
                    Fundamental techniques.<br />
                    Fantastic food.
                  </h2>

                  <br />

                  <p className='mc-text--muted'>
                    Chef Thomas Keller is the only American chef to hold
                    multiple Michelin three-star ratings. In his MasterClass,
                    the chef behind The French Laundry teaches you the
                    foundations of his kitchen, from cookware to essential
                    ingredients. Learn techniques like blanching, glazing,
                    confit, and more. Gain the skills—and confidence—that
                    will help you execute vegetables, eggs, and pastas to
                    perfection.
                  </p>
                </div>
              </div>
              <br />
              <br />
            </Background>
          </CodeExample>

          <CodeExample>
            <div className='uncontainer'>
              <Background
                element={<img src={abstractBackground} />}
                fit='content'
                position='center top'
                size='cover'
              >
                <br />
                <br />
                <br />
                <div className='container mc-text--center'>
                  <h2 className='mc-text-h4 mc-text--airy mc-mb-4'>
                    Learn From The Best
                  </h2>

                  <p className='mc-text--muted mc-mb-5'>
                    Visit our blog for a deeper dive
                    into all things MasterClass.
                  </p>

                  <p className='mc-text--uppercase'>
                    Read More &gt;
                  </p>
                </div>
                <br />
                <br />
                <br />
              </Background>
            </div>
          </CodeExample>
        </DocSection>

        <DocSection title='Properties'>
          <PropExample
            name='color'
            type='enum'
            description='A named color to fill the background with.'
          >
            <div style={{ background: '#31333b', padding: '1em' }}>
              <div className='row mc-text--center'>
                <div className='col-3'>
                  <Background color='light' className='mc-invert'>
                    <br />
                    light
                    <br />
                    <br />
                  </Background>
                </div>

                <div className='col-3'>
                  <Background color='medium'>
                    <br />
                    medium
                    <br />
                    <br />
                  </Background>
                </div>

                <div className='col-3'>
                  <Background color='dark'>
                    <br />
                    dark
                    <br />
                    <br />
                  </Background>
                </div>

                <div className='col-3'>
                  <Background color='transparent'>
                    <br />
                    transparent
                    <br />
                    <br />
                  </Background>
                </div>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='element'
            type='element'
            description='
              The component to render as the background element.
              Currently, only <img /> is supported,
              but will soon support <video />.
            '
          >
            <div className='row mc-text--center'>
              <div className='col-4'>
                <Background
                  element={<img src={thomasKellerBackground} />}
                >
                  <br />
                  &lt;img /&gt;
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={abstractBackground} />}
                >
                  <br />
                  &lt;img /&gt;
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                >
                  <br />
                  &lt;img /&gt;
                  <br />
                  <br />
                </Background>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='position'
            type='enum'
            description='
              The direction in which to anchor the element in the background
              (similar to CSS background-position).
            '
          >
            <div className='row mc-text--center'>
              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  position='center top'
                >
                  <br />
                  center top
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  position='right bottom'
                >
                  <br />
                  right bottom
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  position='left center'
                >
                  <br />
                  left center
                  <br />
                  <br />
                </Background>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='size'
            type='enum'
            description='
              Specifies the size of the background element
              (similar to CSS background-size).
            '
          >
            <div className='row mc-text--center'>
              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  size='none'
                >
                  <br />
                  none
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  size='contain'
                >
                  <br />
                  contain
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  size='cover'
                >
                  <br />
                  cover
                  <br />
                  <br />
                </Background>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='fit'
            type='enum'
            description='
              Decides what element to fit the container to,
              the content or background.
            '
          >
            <div className='row mc-text--center'>
              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  fit='content'
                >
                  <br />
                  content
                  <br />
                  <br />
                </Background>
              </div>

              <div className='col-4'>
                <Background
                  element={<img src={shondaRhimesThumbnail} />}
                  fit='background'
                >
                  <br />
                  background
                  <br />
                  <br />
                </Background>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    </div>
  )))
