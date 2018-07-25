import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import RadioInput from '../RadioInput'

// Input Handler
class RadioInputHandler extends Component {
  state = { checked: false }

  render () {
    const { checked } = this.state

    return (
      <div style={{ maxWidth: '500px' }}>
        <RadioInput
          {...this.props}
          checked={checked}
          onChange={() => this.setState({ checked: !checked })}
        />
      </div>
    )
  }
}


storiesOf('components|Forms/RadioInput', module)
  .add('default', withProps(RadioInput)(() =>
    <RadioInput
      label='My radio input'
      onChange={action('clicked')}
    />,
  ))
  .add('checked', withProps(RadioInput)(() =>
    <RadioInput
      label='My radio input'
      onChange={action('clicked')}
      checked
    />,
  ))
  .add('with handler', withProps(RadioInput)(() =>
    <RadioInputHandler
      label='My radio input'
    />,
  ))
