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
          <h5 className='mc-text-h5'>Default State</h5>
          {/*
            - Entire inpiut wrapped with mc-input-checkbox
            - aria-labelledby is set to the ID of the label
            - htmlFor on the label is set to the id of the input
          */}
          <Checkbox
            onChange={console.log}
            value={false}
          >
            I agree to the terms
          </Checkbox>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Checked State</h5>
          <Checkbox
            onChange={console.log}
            value={true}
          >
            I like checking things twice
          </Checkbox>
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
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox--checked</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted checkbox - Default</h5>
          <div className='rounded-box'>
            <p className='mc-input-checkbox mc-input-checkbox--invert'>
              <span
                className='mc-input-checkbox__fauxbox'
                role='checkbox'
                aria-checked='false'
                tabIndex='0'
                aria-labelledby='scss-once-label'
              >
              </span>
              <input
                type='checkbox'
                id='scss-once'
                className='mc-input-checkbox__realbox'
              />
              <label
                className='mc-input-checkbox__label'
                id='scss-once-label'
                htmlFor='scss-once'
              >
                Check twice, SCSS once
              </label>
            </p>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox--checked</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted checkbox - Checked</h5>
          <div className='rounded-box'>
            <p className='mc-input-checkbox mc-input-checkbox--checked mc-input-checkbox--invert'>
              <span
                className='mc-input-checkbox__fauxbox'
                role='checkbox'
                aria-checked='true'
                tabIndex='0'
                aria-labelledby='just-agree-label'
              >
              </span>
              <input
                type='checkbox'
                id='just-agree'
                className='mc-input-checkbox__realbox'
                checked='checked'
              />
              <label
                className='mc-input-checkbox__label'
                id='just-agree-label'
                htmlFor='just-agree'
              >
                I agree
              </label>
            </p>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-checkbox--checked</p>
        </div>
      </div>
    </div>
  ))
