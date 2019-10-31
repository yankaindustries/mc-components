import React from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import Button from '../../components/Button'
import Background from '../../components/Background'
import CodeExample from '../../utils/CodeExample'


const Theme = () =>
  <div className='container'>
    <DocHeader
      title='Utilities - Theme'
      description="Theme class names can be nested to your heart's content!"
    />

    <p>
      Our base theme for every component assumes a &ldquo;dark&rdquo;
      background.  To change the theme, you can use the helper classes:
      <span className='mc-code mc-mx-2'>.mc-theme-dark</span>
      <span className='mc-code mc-mx-2'>.mc-theme-light</span>
    </p>

    <DocSection title='Base (dark) theme'>
      <h6 className='mc-text-h6 mc-mb-6'>
        <span className='mc-code mc-mr-3'>
          className=&apos;mc-theme-dark&apos;
        </span>
         or no specific class set
      </h6>
      <CodeExample>
        <div className='row'>
          <div className='col-4'>
            <Button kind='primary'>
              Button
            </Button>
          </div>

          <div className='col-4'>
            <Button kind='secondary'>
              Button
            </Button>
          </div>

          <div className='col-4'>
            <Button kind='tertiary'>
              Button
            </Button>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p>
              Sed dolor nulla pariatur laboris nulla sit in sint velit
              est magna officia deserunt cupidatat commodo ea nostrud
              occaecat magna adipisicing sed culpa ut fugiat non minim
              ut sint laboris est laboris commodo tempor excepteur
              non pariatur.
            </p>
          </div>
        </div>
      </CodeExample>
    </DocSection>

    <DocSection title='Light theme'>
      <h6 className='mc-text-h6 mc-mb-6'>
        <span className='mc-code mc-mr-3'>
          className=&apos;mc-theme-light&apos;
        </span>
      </h6>

      <CodeExample>
        <Background
          color='light'
          className='mc-theme-light mc-p-4'
        >
          <div className='row'>
            <div className='col-4'>
              <Button kind='primary'>
                Button
              </Button>
            </div>

            <div className='col-4'>
              <Button kind='secondary'>
                Button
              </Button>
            </div>

            <div className='col-4'>
              <Button kind='tertiary'>
                Button
              </Button>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <p>
                Sed dolor nulla pariatur laboris nulla sit in sint velit
                est magna officia deserunt cupidatat commodo ea nostrud
                occaecat magna adipisicing sed culpa ut fugiat non minim
                ut sint laboris est laboris commodo tempor excepteur
                non pariatur.
              </p>
            </div>
          </div>
        </Background>
      </CodeExample>
    </DocSection>

    <DocSection title='Nested themes'>
      <CodeExample>
        <Background
          color='light'
          className='mc-theme-light mc-p-4 mc-mt-4'
        >
          <h6 className='mc-text-h6 mc-mb-6'>
            <span className='mc-code mc-mr-3'>
              className=&apos;mc-theme-light&apos;
            </span>
          </h6>
          <p>
            Sed dolor nulla pariatur laboris nulla sit in sint velit
            est magna officia deserunt cupidatat commodo ea nostrud
            occaecat magna adipisicing sed culpa ut fugiat non minim
            ut sint laboris est laboris commodo tempor excepteur
            non pariatur.
          </p>
          <Button kind='tertiary' size='small' className='mc-mt-3'>
            Button
          </Button>

          <Background
            color='dark'
            className='mc-theme-dark mc-p-4 mc-mt-4'
          >
            <h6 className='mc-text-h6 mc-mb-6'>
              <span className='mc-code mc-mr-3'>
                className=&apos;mc-theme-dark&apos;
              </span>
            </h6>

            <p>
              Sed dolor nulla pariatur laboris nulla sit in sint velit
              est magna officia deserunt cupidatat commodo ea nostrud
              occaecat magna adipisicing sed culpa ut fugiat non minim
              ut sint laboris est laboris commodo tempor excepteur
              non pariatur.
            </p>

            <Button kind='tertiary' size='small' className='mc-mt-3'>
              Button
            </Button>

            <Background
              color='light'
              className='mc-theme-light mc-p-4 mc-mt-4'
            >
              <h6 className='mc-text-h6 mc-mb-6'>
                <span className='mc-code mc-mr-3'>
                  className=&apos;mc-theme-light&apos;
                </span>
              </h6>

              <p>
                Sed dolor nulla pariatur laboris nulla sit in sint velit
                est magna officia deserunt cupidatat commodo ea nostrud
                occaecat magna adipisicing sed culpa ut fugiat non minim
                ut sint laboris est laboris commodo tempor excepteur
                non pariatur.
              </p>
              <Button kind='tertiary' size='small' className='mc-mt-3'>
                Button
              </Button>
            </Background>
          </Background>
        </Background>
      </CodeExample>
    </DocSection>
  </div>


export default withAddons({
  path: 'foundation/utilities/theme.stories.js',
})(() => <Theme />)
