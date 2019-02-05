import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'
import Button from '../Button'
import IconGoogle from '../Icons/Google'
import IconFacebook from '../Icons/Facebook'
import IconPinterest from '../Icons/Pinterest'
import IconTwitter from '../Icons/Twitter'
import IconCheck from '../Icons/Check'
import IconChevronRight from '../Icons/ChevronRight'
import IconLock from '../Icons/Lock'
import IconMagnifyingGlass from '../Icons/MagnifyingGlass'
import IconClose from '../Icons/Close'


storiesOf('Components|Button', module)
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
            name='type'
            type='string(primary, secondary, tertiary, link)'
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
                  <IconChevronRight className='mc-ml-3' />
                </Button>
              </div>

              <div className='col-auto'>
                <Button secondary>
                  <IconLock className='mc-mr-3' />
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

          <PropExample
            name='type'
            type='string'
          >
            <div className='row'>
              <div className='col-12'>
                <p>
                  You can also pass in a &ldquo;type&rdquo;
                  of any of the following strings and get the
                  background color / text color combinations
                  shown here.
                </p>
              </div>

              <div className='col-4'>
                <Button kind='google' fullWidth>
                  <IconGoogle className='mc-mr-3' />
                  Google
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='facebook' fullWidth>
                  <IconFacebook className='mc-mr-3' />
                  Facebook
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='twitter' fullWidth>
                  <IconTwitter className='mc-mr-3' />
                  Twitter
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='pinterest' fullWidth>
                  <IconPinterest className='mc-mr-3' />
                  Pinterest
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='paypal' fullWidth>
                  Paypal
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='success' fullWidth>
                  <IconCheck className='mc-mr-3' />
                  Success
                </Button>
              </div>
              <div className='col-4'>
                <Button kind='applepay' fullWidth>
                  Apple pay
                </Button>
              </div>
            </div>
          </PropExample>

        </InvertedMirror>
      </DocSection>
    </div>
  )))
