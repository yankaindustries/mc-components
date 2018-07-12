import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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

const infoProps = {
  source: true,
  inline: true,
  header: false,
  propTables: [InputComponent],
  propTablesExclude: [Input],
}

storiesOf('components|Input', module)
  .add('default',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My input' />,
    ),
  )
  .add('with label',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My input' label='My input' />,
    ),
  )
  .add('fixed width',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My input' fullWidth={false} style={{ width: '200px' }} />,
    ),
  )
  .add('with error',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My email' error='Email is required' />,
    ),
  )
  .add('with error and label',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My email' label='My email' error='Email is required' />,
    ),
  )
  .add('without placeholder',
    withInfo({
      ...infoProps,
    })(() =>
      <Input />,
    ),
  )
  .add('disabled',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My email' disabled />,
    ),
  )
  .add('with warning',
    withInfo({
      ...infoProps,
    })(() =>
      <Input placeholder='My email' warning='Did you mean johndoe@gmail.com?' />,
    ),
  )
