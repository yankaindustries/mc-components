import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Popper from 'popper.js'


const TooltipContext = React.createContext('tooltip')

export const {
  Provider,
  Consumer,
} = TooltipContext


export default class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    show: false,
  }

  tooltipRef = React.createRef()

  toggle = (event) => {
    const { show } = this.state

    if (!show) {
      this.tooltip = new Popper(
        event.currentTarget,
        this.tooltipRef.current,
        { placement: 'top' },
      )
    }

    this.setState({ show: !show })
  }

  render () {
    const { children } = this.props
    const { show } = this.state

    return (
      <Provider value={{
        show,
        tooltipRef: this.tooltipRef,
        toggle: this.toggle,
      }}>
        {children}
      </Provider>
    )
  }
}
