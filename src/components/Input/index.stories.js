import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

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
    <form className='mc-form--temporary'>
      <div className='mc-form__element'>
        <input className='mc-form__input' name='your-name' id='your-name' placeholder='Jerry, Justin, Stephen, Stephanie?' />
        <label htmlFor='your-name' className='mc-form__label'>
          What is your name?
        </label>
      </div>
    </form>,
  ))
