import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Checkbox from '../Checkbox'

storiesOf('components|Forms/Checkbox', module)
  .add('default', withProps(Checkbox)(() => (
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Checkboxes</h2>
        <p>And their various states</p>
      </div>
      <div className='container'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Default</h5>

          <div className='rounded-box'>
            <Checkbox
              name='terms'
              label='I agree to the terms'
              onChange={console.log}
              checked={true}
            />

            <Checkbox
              name='twice'
              label='I like checking things twice'
              onChange={console.log}
            />

            <Checkbox
              name='lipsum'
              label='
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                dui nibh. Morbi facilisis efficitur orci, in facilisis leo.
                Donec libero libero, egestas non lacus in, ullamcorper suscipit
                nisi. Aenean nisi erat, ultricies nec metus id, sagittis tortor.
                Suspendisse rutrum placerat lectus, sit amet faucibus augue
                elementum at. Aliquam congue non erat eu pellentesque.
              '
              onChange={console.log}
            />
          </div>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>
            <Checkbox
              name='terms'
              label='I agree to the terms'
              onChange={console.log}
              checked
              inverted
            />

            <Checkbox
              name='twice'
              label='I like checking things twice'
              onChange={console.log}
              inverted
            >
              I like checking things twice
            </Checkbox>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox--checked</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted checkbox - Default</h5>
          <div className='rounded-box'>
            <Checkbox
              onChange={console.log}
              value={false}
              inverted
            >
              I like checking things twice
            </Checkbox>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox--checked</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted checkbox - Checked</h5>
          <div className='rounded-box'>
            <Checkbox
              onChange={console.log}
              value={true}
              inverted
            >
              I like checking things twice
            </Checkbox>
        </div>
      </div>
    </div>
  )))
