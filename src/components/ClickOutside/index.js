import React, { Component } from 'react'
import { func, object } from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: func.isRequired,
    children: PROP_TYPE_CHILDREN.isRequired,
    divRef: object,
  }

  static defaultProps = {
    onClickOutside: () => {},
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
    const {
      children,
      divRef,
      onClickOutside,
      ...restProps
    } = this.props

    if (divRef) {
      return children
    }

    return (
      <div ref={this.box} {...restProps}>
        {children}
      </div>
    )
  }
}
