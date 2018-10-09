import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const DELAY = 300


export default class HoverHandler extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    hovering: false,
    intent: false,
  }

  componentWillUnmount () {
    if (this.timer) this.timer = clearTimeout(this.timer)
  }

  onEnter = () => {
    if (this.timer) this.timer = clearTimeout(this.timer)

    this.setState({
      hovering: true,
    })

    this.timer = setTimeout(
      () => {
        this.setState({
          intent: true,
        })
      },
      DELAY,
    )
  }

  onLeave = () => {
    if (this.timer) this.timer = clearTimeout(this.timer)

    this.setState({
      hovering: false,
      intent: false,
    })
  }

  render () {
    const {
      children,
    } = this.props
    const {
      hovering,
      intent,
    } = this.state

    return (
      <span
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        {children({ hovering, intent })}
      </span>
    )
  }
}
