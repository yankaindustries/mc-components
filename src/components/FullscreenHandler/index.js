import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren } from '../helpers'

const fullscreenEvents = [
  'fullscreenchange',
  'mozfullscreenchange',
  'webkitfullscreenchange',
  'msfullscreenchange',
]

export default class FullscreenHandler extends PureComponent {
  static propTypes = {
    onFullscreenChange: PropTypes.func,
    children: PROP_TYPE_CHILDREN.isRequired,
  }

  state = {
    fullscreenElement: null,
  }

  componentDidMount () {
    this.checkFullscreenState()
    fullscreenEvents.forEach(eventName => document.addEventListener(
      eventName, this.checkFullscreenState))
  }

  componentWillUnmount () {
    fullscreenEvents.forEach(eventName => document.removeEventListener(
      eventName, this.checkFullscreenState))
  }

  checkFullscreenState = () => {
    const fullscreenElement = document.fullscreenElement
      || document.mozFullScreenElement
      || document.webkitFullscreenElement
      || document.msFullscreenElement

    this.setState({ fullscreenElement })
  }

  render () {
    const { children } = this.props
    const { fullscreenElement } = this.state

    return renderChildren(children, { fullscreenElement })
  }
}
