import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Input from '../Input'
import Lock from '../Icons/Lock'
import MagnifyingGlass from '../Icons/MagnifyingGlass'
import Close from '../Icons/Close'


storiesOf('components|Forms/Input', module)
  .add('Input', withProps(Input)(() =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Input</h2>
        <p>Some various text inputs...</p>
      </div>

      <div className='example--section'>
        <div className='mc-form'>
          <div className='mc-form-group'>
            <Input
              name='test'
              label={"What's your favorite color?"}
              placeholder='Red, orange, yellow, green, blue, violet, or something else?'
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='prepend-password'
              placeholder='Password'
              type='password'
              prepend={<Lock />}
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='prepend'
              placeholder='Search'
              prepend={<MagnifyingGlass />}
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='prepend'
              label='Field with appended icon'
              placeholder='Hint: It is a close icon!'
              append={<Close />}
            />
          </div>

          <hr />

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--error'>
              <div className='mc-form-textbox__input'>
                <input name='error-example' id='error-example' placeholder='With prepended element' />
                <label htmlFor='error-example' className='mc-form-textbox__label'>
                  Error example
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--error mc-form-textbox--focus'>
              <div className='mc-form-textbox__input'>
                <input name='error-example' id='error-example' placeholder='Placeholder' />
                <label htmlFor='error-example' className='mc-form-textbox__label'>
                  Should the error message overwrite the label?
                </label>
              </div>
            </div>
          </div>


          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--error mc-form-textbox--focus'>
              <div className='mc-form-textbox__input'>
                <input name='error-example' id='error-example' value='This is content the user typed' />
                <label htmlFor='error-example' className='mc-form-textbox__label'>
                  Should the error message overwrite the label?
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>,
  ))
