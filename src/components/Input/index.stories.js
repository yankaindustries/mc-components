import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Input from '../Input'
import Arrow from '../Icons/Arrow'


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
              name='test'
              placeholder='Placeholder'
            />
          </div>

          <div className='mc-form-group'>
            <Input
              name='prepend'
              label='Field Label'
              placeholder='Placeholder'
              prepend={<Arrow />}
            />
          </div>

          <hr />

          <div className='mc-form-group'>
            <div className='mc-form-textbox'>
              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' placeholder='Jerry, Justin, Stephen, Stephanie?' />
                <label htmlFor='your-name' className='mc-form-textbox__label'>
                  Field Label
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--focus'>
              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' placeholder='Clicked into / focused' />
                <label htmlFor='your-name' className='mc-form-textbox__label'>
                  Field Label
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--focus'>
              <div className='mc-form-prepend'>
                <Arrow />
              </div>

              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' placeholder='With prepended element' />
                <label htmlFor='your-name' className='mc-form-textbox__label'>
                  Field Label
                </label>
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--focus mc-form-textbox--modified'>
              <div className='mc-form-prepend'>
                <Arrow />
              </div>

              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' placeholder='With prepended element (modified)' value='With prepended element (modified)' />
                <label htmlFor='your-name' className='mc-form-textbox__label'>
                  Field Label
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ))
