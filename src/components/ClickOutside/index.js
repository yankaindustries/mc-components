import React, { Component } from 'react'
import { func, node, object, oneOfType, arrayOf } from 'prop-types'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: func.isRequired,
    children: oneOfType([arrayOf(node), node]).isRequired,
    divRef: object,
  }

  state = { isTouch: false }

  componentDidMount () {
    document.addEventListener('touchend', this.onClickOutside, true)
    document.addEventListener('click', this.onClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('touchend', this.onClickOutside, true)
    document.removeEventListener('click', this.onClickOutside, true)
  }

  onClickOutside = (e) => {
    if (e.type === 'touchend') {
      this.setState({ isTouch: true })
    }
    if (e.type === 'click' && this.state.isTouch) return
    const { divRef } = this.props
    const ref = divRef || this.box
    if (!ref || !ref.current.contains(e.target)) {
      const { onClickOutside } = this.props
      onClickOutside(e)
    }
  }

  box = React.createRef()

  render () {
    const { children, divRef } = this.props

    if (divRef) {
      return children
    }

    return (
      <div ref={this.box}>
        {children}
      </div>
    )
  }
}
