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
      <h2 className='mc-text-h2'>Button</h2>

      <DocSection title='Variations'>
        <PropExample
          name='default (no properties)'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button>Default</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='secondary | tertiary'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button secondary>Secondary</Button>
            </div>

            <div className='col-auto'>
              <Button tertiary>Tertiary</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='link | linkMuted | text'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button link>Link</Button>
            </div>
            <div className='col-auto'>
              <Button linkMuted>Link Muted</Button>
            </div>
            <div className='col-auto'>
              <Button text>Text</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='outline'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button outline>Outline</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='outlineInvert'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button outlineInvert>Outline - Invert</Button>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='icon'
          type='Component'
        >
          <div className='row'>
            <div className='col-auto'>
              <Button className='c-button--facebook'>
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
            <div className='col-auto'>
              <Button fullWidth>
                Button
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
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))
