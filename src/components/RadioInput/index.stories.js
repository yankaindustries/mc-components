import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

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

const infoProps = {
  inline: true,
  header: false,
  propTables: [RadioInput],
  propTablesExclude: [RadioInputHandler],
}

storiesOf('components|RadioInput', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <RadioInput
        label='My radio input'
        onChange={action('clicked')}
      />,
    ),
  )
  .add('checked',
    withInfo({ ...infoProps })(() =>
      <RadioInput
        label='My radio input'
        onChange={action('clicked')}
        checked
      />,
    ),
  )
  .add('with handler',
    withInfo({ ...infoProps })(() =>
      <RadioInputHandler
        label='My radio input'
      />,
    ),
  )
