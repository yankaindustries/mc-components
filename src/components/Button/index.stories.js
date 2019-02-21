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
                <h6 className='mc-text-h6'>
                  Third-Party Support
                </h6>
              </div>

              <div className='col-auto'>
                <Button kind='google'>
                  <IconGoogle className='mc-mr-3' />
                  Google
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='facebook'>
                  <IconFacebook className='mc-mr-3' />
                  Facebook
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='twitter'>
                  <IconTwitter className='mc-mr-3' />
                  Twitter
                </Button>
              </div>
              <div className='col-auto'>
                <Button kind='pinterest'>
                  <IconPinterest className='mc-mr-3' />
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

              <div className='col-auto'>
                <Button kind='paypal' disabled>
                  Paypal
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
                <Button kind='secondary'>
                  <IconLock className='mc-mr-3' />
                  Secondary
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='tertiary'>
                  <IconMagnifyingGlass />
                </Button>
              </div>

              <div className='col-auto'>
                <Button kind='link'>
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

          <div className='row'>
            <div className='col-12'>
              <p>
                You can also pass in a &ldquo;kind&rdquo;
                of any of the following strings and get the
                background color / text color combinations
                shown here.
              </p>
            </div>
          </div>
        </InvertedMirror>
      </DocSection>
    </div>
  )))
