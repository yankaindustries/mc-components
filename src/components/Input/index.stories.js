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
              label='Field Label'
              placeholder='Placeholder'
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='search'
              placeholder='Placeholder'
              prepend={<MagnifyingGlass />}
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='password'
              placeholder='Placeholder'
              type='password'
              value='it is a secret'
              prepend={<Lock />}
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='prepend'
              label='Field Label'
              placeholder='Placeholder'
              append={<Close />}
            />
          </div>

          <hr />

          <div className='mc-form-group'>
            <div className='mc-form-textbox'>
              <div className='mc-form-textbox__input'>
                <input name='just-a-label-example' id='just-a-label-example' placeholder='Jerry, Justin, Stephen, Stephanie?' />
                <label htmlFor='just-a-label-example' className='mc-form-textbox__label'>
                  Field Label
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--focus'>
              <div className='mc-form-textbox__input'>
                <input name='focused-example' id='focused-example' placeholder='Clicked into / focused' />
                <label htmlFor='focused-example' className='mc-form-textbox__label'>
                  Field Label (focused state)
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--no-label'>
              <div className='mc-form-prepend'>
                <MagnifyingGlass />
              </div>

              <div className='mc-form-textbox__input'>
                <input name='prepended-example' id='prepended-example' placeholder='With prepended element' />
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--no-label'>
              <div className='mc-form-prepend'>
                <Lock />
              </div>

              <div className='mc-form-textbox__input'>
                <input name='password-example' id='password-example' type='password' placeholder='Password field (try me! - password should be hidden)' />
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--focus'>
              <div className='mc-form-textbox__input'>
                <input name='appended-x' id='appended-x' type='text' placeholder='Your text should overflow without covering the icon' />
                <label htmlFor='appended-x' className='mc-form-textbox__label'>
                  Field label (with appended close icon)
                </label>
              </div>

              <div className='mc-form-append'>
                <Close />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>,
  ))
