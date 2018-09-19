import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Arrow from '../Icons/Arrow'

import InputComponent from '../Input'

// Input Handler
class Input extends Component {
  state = { value: '' }

  render () {
    const { value } = this.state

    return (
      <div style={{ maxWidth: '500px' }}>
        <InputComponent
          {...this.props}
          value={value}
          onChange={value => this.setState({ value })}
        />
      </div>
    )
  }
}


storiesOf('components|Forms/Input', module)
  .add('default', withProps(InputComponent)(() =>
    <Input placeholder='My input' />,
  ))
  .add('with label', withProps(InputComponent)(() =>
    <Input placeholder='My input' label='My input' />,
  ))
  .add('fixed width', withProps(InputComponent)(() =>
    <Input placeholder='My input' fullWidth={false} style={{ width: '200px' }} />,
  ))
  .add('with error', withProps(InputComponent)(() =>
    <Input placeholder='My email' error='Email is required' />,
  ))
  .add('with error and label', withProps(InputComponent)(() =>
    <Input placeholder='My email' label='My email' error='Email is required' />,
  ))
  .add('without placeholder', withProps(InputComponent)(() =>
    <Input />,
  ))
  .add('disabled', withProps(InputComponent)(() =>
    <Input placeholder='My email' disabled />,
  ))
  .add('with warning', withProps(InputComponent)(() =>
    <Input placeholder='My email' warning='Did you mean johndoe@gmail.com?' />,
  ))
  .add('new input', withProps(InputComponent)(() =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Forms</h2>
        <p>Some various input texts...</p>
      </div>

      <div className='example--section'>
        <h2 className='mc-text-h2'>Input type text</h2>

        <div className='mc-form'>
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
