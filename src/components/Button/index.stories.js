import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Button from '../Button'
import FacebookIcon from '../Icons/Facebook'


storiesOf('components|Button', module)
  .add('Button', withProps(Button)(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>Button</h1>
      </div>

      <DocSection title='Variations'>
        <PropExample
          name='default (no properties) | secondary | tertiary'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button>Default</Button>
            </div>
            <div className='col-auto'>
              <Button secondary>Secondary</Button>
            </div>

            <div className='col-auto'>
              <Button tertiary>Tertiary</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='link | linkMuted'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button link>Link</Button>
            </div>
            <div className='col-auto'>
              <Button linkMuted>Link Muted</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='icon'
          type='Component'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button className='c-button c-button--facebook'>
                <FacebookIcon />
                {' '}
                Get Connected
              </Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='loading'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button loading>
                Button
              </Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='fullWidth'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-12'>
              <Button fullWidth>
                Button - Full Width
              </Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='disabled'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button disabled>
                Button disabled
              </Button>
            </div>

            <div className='col-auto'>
              <Button disabled secondary>
                Secondary disabled
              </Button>
            </div>

            <div className='col-auto'>
              <Button disabled tertiary>
                Tertiary disabled
              </Button>
            </div>
          </div>
        </PropExample>
      </DocSection>


      <DocSection title='Inverted'>
        <div className='rounded-box mc-invert'>
          <PropExample
            name='default (no properties) | secondary | tertiary'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button>Default</Button>
              </div>
              <div className='col-auto'>
                <Button secondary>Secondary</Button>
              </div>

              <div className='col-auto'>
                <Button tertiary>Tertiary</Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='link | linkMuted'
            type='Boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button link>Link</Button>
              </div>
              <div className='col-auto'>
                <Button linkMuted>Link Muted</Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='icon'
            type='Component'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button className='c-button c-button--facebook'>
                  <FacebookIcon />
                  {' '}
                  Get Connected
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='loading'
            type='Boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button loading>
                  Button
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='fullWidth'
            type='Boolean'
          >
            <div className='row'>
              <div className='col-12'>
                <Button fullWidth>
                  Button - Full Width
                </Button>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='disabled'
            type='Boolean'
          >
            <div className='row'>
              <div className='col-auto'>
                <Button disabled>
                  Button disabled
                </Button>
              </div>

              <div className='col-auto'>
                <Button disabled secondary>
                  Secondary disabled
                </Button>
              </div>

              <div className='col-auto'>
                <Button disabled tertiary>
                  Tertiary disabled
                </Button>
              </div>
            </div>
          </PropExample>
        </div>
      </DocSection>
    </div>
  )))
