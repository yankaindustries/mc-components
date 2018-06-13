import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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

const infoProps = {
  source: true,
  inline: true,
  header: false,
  propTables: [TextAreaComponent],
  propTablesExclude: [TextArea],
}

storiesOf('TextArea', module)
  .add('default',
    withInfo({
      ...infoProps,
    })(() =>
      <TextArea placeholder='My text area' />,
    ),
  )
  .add('fixed width',
    withInfo({
      ...infoProps,
    })(() =>
      <TextArea placeholder='My text area' fullWidth={false} style={{ width: '200px' }} />,
    ),
  )
  .add('with error',
    withInfo({
      ...infoProps,
    })(() =>
      <TextArea placeholder='My text area' error='This text area is required' />,
    ),
  )
  .add('without placeholder',
    withInfo({
      ...infoProps,
    })(() =>
      <TextArea />,
    ),
  )
