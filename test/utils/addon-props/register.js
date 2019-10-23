/* eslint-disable react/display-name */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import addons from '@storybook/addons'

import PropsTable from '../PropsTable'


class PropsPanel extends PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      on: PropTypes.func,
    }),
  }

  state = {}

  componentDidMount () {
    this.props.channel.on(
      'mc/props/value',
      component => this.setState({ component }),
    )
  }

  render () {
    const { component } = this.state

    return !!component && <PropsTable component={this.state.component} />
  }
}


addons.register('mc/props', () => {
  addons.addPanel('mc/props/panel', {
    title: 'Props',
    render: () => <PropsPanel channel={addons.getChannel()} />,
  })
})
