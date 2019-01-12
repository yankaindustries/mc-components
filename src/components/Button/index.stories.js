import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'
import Button from '../Button'
import IconArrow from '../Icons/Arrow'
import IconLock from '../Icons/Lock'
import IconMagnifyingGlass from '../Icons/MagnifyingGlass'
import IconClose from '../Icons/Close'


storiesOf('components|Button', module)
  .add('Summary', withProps(Button)(() => (
    <div className='container'>
      <DocHeader
        title='Button'
        description='
          A variety of different buttons to help users
          identify and give clear meaning to navigation.
        '
      />

      <DocSection title='Properties'>
        <InvertedMirror>
          <PropExample
            name='[default] | secondary | tertiary | link'
            type='boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button>
                  Button
                </Button>
              </div>
              <div className='col-auto'>
                <Button secondary>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button tertiary>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button link>
                  Link
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='disabled'
            type='boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button disabled>
                  Button
                </Button>
              </div>

              <div className='col-auto'>
                <Button secondary disabled>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button tertiary disabled>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button link disabled>
                  Link
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='loading'
            type='boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button loading>
                  Button
                </Button>
              </div>

              <div className='col-auto'>
                <Button secondary loading>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button tertiary loading>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button link loading>
                  Link
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='icon'
            type='children'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button>
                  Button
                  <IconArrow className='mc-ml-2' />
                </Button>
              </div>

              <div className='col-auto'>
                <Button secondary>
                  <IconLock className='mc-mr-2' />
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button tertiary>
                  <IconMagnifyingGlass />
                </Button>
              </div>

              <div className='col-auto'>
                <Button link>
                  <IconClose />
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='fullWidth'
            type='boolean'
          >
            <div className='row'>
              <div className='col-12'>
                <Button fullWidth>
                  Full Width
                </Button>
              </div>
            </div>
          </PropExample>
        </InvertedMirror>
      </DocSection>
    </div>
  )))
