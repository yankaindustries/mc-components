import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from '../Checkbox'


storiesOf('components|Forms/Checkbox', module)
  .add('default', () => (
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
              onChange={console.log}
              value={false}
            >
              I agree to the terms
            </Checkbox>
            <Checkbox
              onChange={console.log}
              value={true}
            >
              I like checking things twice
            </Checkbox>
          </div>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>
            <Checkbox
              onChange={console.log}
              value={false}
              inverted
            >
              I agre to the terms
            </Checkbox>
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
  ))
