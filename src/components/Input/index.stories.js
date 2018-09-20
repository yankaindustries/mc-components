import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Lock from '../Icons/Lock'
import MagnifyingGlass from '../Icons/MagnifyingGlass'
import CloseIcon from '../Icons/Close'

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
        <h2 className='mc-text-h2'>Notes for jones:</h2>
        <ul>
          <li>Needs click event on wrapping .mc-form-textbox class to
          focus input.</li>
          <li>mc-form-textbox--focus when a user clicks into a field,
          removed when they click out</li>
          <li>mc-form-textbox--modified class added once user inputs
          data into a field</li>
        </ul>
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
                <input name='your-name' id='your-name' placeholder='With prepended element' />
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--no-label'>
              <div className='mc-form-prepend'>
                <Lock />
              </div>

              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' type='password' placeholder='Password field (try me! - password should be hidden)' />
              </div>
            </div>
          </div>

          <div className='mc-form-group'>
            <div className='mc-form-textbox mc-form-textbox--no-label'>
              <div className='mc-form-textbox__input'>
                <input name='your-name' id='your-name' type='password' placeholder='Password field (try me! - password should be hidden)' />
              </div>

              <div className='mc-form-append'>
                <CloseIcon />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>,
  ))
