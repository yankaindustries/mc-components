import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('components|Forms/RadioButton', module)
  .add('default', () => (
    // There's already a "RadioInput" component
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Radio Buttons</h2>
        <p>And their various states</p>
      </div>
      <div className='container'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Default</h5>
          <div className='mc-input-radio'>
            <input type='radio'
              className='mc-input-radio__button'
              id='option-red'
              name='favorite-color'
            />
            <label
              className='mc-input-radio__label'
              htmlFor='option-red'
            >
              Red
            </label>
          </div>

          <div className='mc-input-radio'>
            <input type='radio'
              className='mc-input-radio__button'
              id='option-blue'
              name='favorite-color'
            />
            <label
              className='mc-input-radio__label'
              htmlFor='option-blue'
            >
              Blue
            </label>
          </div>

          <div className='mc-input-radio'>
            <input type='radio'
              className='mc-input-radio__button'
              id='option-green'
              name='favorite-color'
            />
            <label
              className='mc-input-radio__label'
              htmlFor='option-green'
            >
              Green
            </label>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-input-radio</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted checkbox - Default</h5>
          <div className='rounded-box'>
            <div className='mc-input-radio mc-input-radio--invert'>
              <input type='radio'
                className='mc-input-radio__button'
                id='option-banana'
                name='favorite-fruit'
              />
              <label
                className='mc-input-radio__label'
                htmlFor='option-banana'
              >
                Red
              </label>
            </div>

            <div className='mc-input-radio mc-input-radio--invert'>
              <input type='radio'
                className='mc-input-radio__button'
                id='option-banana2'
                name='favorite-fruit'
              />
              <label
                className='mc-input-radio__label'
                htmlFor='option-banana2'
              >
                Blue
              </label>
            </div>

            <div className='mc-input-radio mc-input-radio--invert'>
              <input type='radio'
                className='mc-input-radio__button'
                id='option-banana3'
                name='favorite-fruit'
              />
              <label
                className='mc-input-radio__label'
                htmlFor='option-banana3'
              >
                Blue
              </label>
            </div>

            <div className='mc-input-radio mc-input-radio--invert'>
              <input type='radio'
                className='mc-input-radio__button'
                id='option-orange'
                name='favorite-fruit'
              />
              <label
                className='mc-input-radio__label'
                htmlFor='option-orange'
              >
                Green
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
