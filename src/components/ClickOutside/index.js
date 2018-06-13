import React, { Component } from 'react'
import { func, node, object, oneOfType, arrayOf } from 'prop-types'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: func.isRequired,
    children: oneOfType([arrayOf(node), node]).isRequired,
    divRef: object,
  }

  box = React.createRef();

  onClickOutside = (e) => {
    const { divRef } = this.props
    const ref = divRef || this.box
    if (!ref || !ref.current.contains(e.target)) {
      const { onClickOutside } = this.props
      onClickOutside()
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.onClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onClickOutside, true)
  }

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
