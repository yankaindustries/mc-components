import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import TextAreaComponent from '../TextArea'

// TextArea Handler
class TextArea extends Component {
  state = { value: '' }

  render () {
    const { value } = this.state

    return (
      <div style={{ maxWidth: '500px' }}>
        <TextAreaComponent
          {...this.props}
          value={value}
          onChange={value => this.setState({ value })}
        />
      </div>
    )
  }
}


storiesOf('components|Forms/TextArea', module)
  .add('default', withProps(TextAreaComponent)(() =>
    <TextArea placeholder='My text area' />,
  ))
  .add('fixed width', withProps(TextAreaComponent)(() =>
    <TextArea placeholder='My text area' fullWidth={false} style={{ width: '200px' }} />,
  ))
  .add('with error', withProps(TextAreaComponent)(() =>
    <TextArea placeholder='My text area' error='This text area is required' />,
  ))
  .add('without placeholder', withProps(TextArea)(() =>
    <TextArea />,
  ))
