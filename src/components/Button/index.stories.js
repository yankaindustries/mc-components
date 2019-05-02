import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'

import Button from '../Button'
import Icon from '../Icons'
import Separator from '../Separator'

storiesOf('Components|Button', module)
  .add('Summary', withAddons({
    path: 'components/Button/index.stories.js',
    component: Button,
  })(() => (
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
            name='kind'
            type='string'
            description={`
              Change the way your button looks by adjusting the 'kind' property.
            `}
          >
            <div className='row'>
              <div className='col-auto'>
                <Button>
                  Button
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='secondary'>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='tertiary'>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='success'>
                  Success
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='link'>
                  Link
                </Button>
              </div>

              <div className='col-12'>
                <Separator />
              </div>

              <div className='col-12'>
                <h6 className='mc-text-h6'>
                  Third-Party
                </h6>
              </div>

              <div className='col-auto'>
                <Button kind='google'>
                  Google
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='facebook'>
                  Facebook
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='twitter'>
                  Twitter
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='pinterest'>
                  Pinterest
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='paypal'>
                  Paypal
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='applepay'>
                  Apple pay
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
                <Button kind='secondary' disabled>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='tertiary' disabled>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='link' disabled>
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
                <Button kind='secondary' loading>
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='tertiary' loading>
                  Tertiary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='link' loading>
                  Link
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
                  Button
                </Button>
              </div>

              <div className='col-6'>
                <Button secondary fullWidth>
                  Secondary
                </Button>
              </div>

              <div className='col-6'>
                <Button tertiary fullWidth>
                  Tertiary
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='Icons'
            description={
              <span>
                You can embed icons using the
                {' '}
                <span className='mc-code'>Icon</span>
                {' '}
                component.
              </span>
            }
          >
            <div className='row'>
              <div className='col-auto'>
                <Button>
                  Next
                  <Icon kind='chevron-right' className='mc-ml-3' />
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='secondary'>
                  <Icon kind='lock' className='mc-mr-3' />
                  Lock
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='tertiary'>
                  <Icon kind='magnifying-glass' />
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='success'>
                  <Icon kind='check' className='mc-mr-3' />
                  Saved
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='link'>
                  <Icon kind='close' className='mc-mr-3' />
                  Close
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='symmetrical'
            type='boolean'
            description='Applies the same padding all around the button'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button symmetrical>
                  <Icon kind='google' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='secondary' symmetrical>
                  <Icon kind='plus' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='tertiary' symmetrical>
                  <Icon kind='filter' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='link' symmetrical>
                  <Icon kind='rewind' />
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='rounded'
            type='boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button rounded>
                  <Icon kind='google' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='secondary' rounded>
                  <Icon kind='plus' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='tertiary' rounded>
                  <Icon kind='filter' />
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='link' rounded>
                  <Icon kind='rewind' />
                </Button>
              </div>
            </div>
          </PropExample>
        </InvertedMirror>
      </DocSection>
    </div>
  )))
