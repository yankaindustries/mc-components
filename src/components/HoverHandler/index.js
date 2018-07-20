import React, { PureComponent, Fragment } from 'react'


export default class HoverHandler extends PureComponent {
  state = {
    hovering: false,
  }

  onEnter () {
    this.setState({ hovering: true })
  }

  onLeave () {
    this.setState({ hovering: false })
  }

  render() {
    const { children } = this.props
    const { hovering } = this.state

    return (
      <div
        onMouseEnter={this.onEnter.bind(this)}
        onMouseLeave={this.onLeave.bind(this)}
      >
        {children({ hovering })}
      </div>
    )
  }
}
