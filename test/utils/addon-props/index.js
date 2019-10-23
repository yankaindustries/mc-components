/* eslint-disable no-underscore-dangle, react/display-name */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import addons from '@storybook/addons'


export default class WithProps extends PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      emit: PropTypes.func,
    }),
    children: PropTypes.func,
    context: PropTypes.object,
    story: PropTypes.func,
  }

  componentDidMount () {
    this.props.channel.emit(
      'mc/props/value',
      this.props.children.__docgenInfo,
    )
  }

  componentWillUnmount () {
    this.props.channel.emit(
      '/mc/props/value',
      'false',
    )
  }

  render () {
    const {
      story,
      context,
    } = this.props

    return story(context)
  }
}


export const withProps = component => story => context =>
  <WithProps
    channel={addons.getChannel()}
    story={story}
    context={context}
  >
    {component}
  </WithProps>
