import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const DELAY = 600


export default class HoverHandler extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    nowrap: PropTypes.bool,
    onChange: PropTypes.func,
  }

  state = {
    hovering: false,
    intent: false,
  }

  componentWillUnmount () {
    if (this.timer) this.timer = clearTimeout(this.timer)
  }

  onChange = (state) => {
    this.setState(state)
    if (this.props.onChange) this.props.onChange(state)
  }

  onEnter = () => {
    if (this.timer) this.timer = clearTimeout(this.timer)

    this.onChange({ hovering: true })

    this.timer = setTimeout(
      () => this.onChange({ intent: true }),
      DELAY,
    )
  }

  onLeave = () => {
    if (this.timer) this.timer = clearTimeout(this.timer)

    this.onChange({ hovering: false })

    this.timer = setTimeout(
      () => this.onChange({ intent: false }),
      DELAY,
    )
  }

  render () {
    const {
      children,
      nowrap,
    } = this.props

    const {
      hovering,
      intent,
    } = this.state

    const content = children({
      hovering,
      intent,
      props: {
        onMouseEnter: this.onEnter,
        onMouseLeave: this.onLeave,
      },
    })

    if (nowrap) {
      return content
    }

    return (
      <span
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        {content}
      </span>
    )
  }
}
