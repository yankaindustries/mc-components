import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Popper from 'popper.js'


const TooltipContext = React.createContext('tooltip')

export const {
  Provider,
  Consumer,
} = TooltipContext


const PROP_TYPE_PLACEMENT = PropTypes.oneOf([
  'auto',
  'auto-end',
  'auto-start',
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'right',
  'right-end',
  'right-start',
  'top',
  'top-end',
  'top-start',
])


export default class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    placement: PROP_TYPE_PLACEMENT,
  }

  static defaultProps = {
    placement: 'top',
  }

  state = {
    show: false,
  }

  tooltipRef = React.createRef()
  arrowRef = React.createRef()

  toggle = (event) => {
    const { placement } = this.props

    if (this.tooltip) {
      this.tooltip.update()
    } else {
      this.tooltip = new Popper(
        event.currentTarget,
        this.tooltipRef.current,
        {
          placement,
          modifiers: {
            arrow: {
              element: this.arrowRef.current,
            },
            applyStyle: {
              enabled: true,
              fn: this.applyStyle,
            },
          },
        },
      )
    }

    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  applyStyle = (data) => {
    this.setState({
      arrowStyles: data.arrowStyles,
      attributes: data.attributes,
      styles: data.styles,
    })
    return data
  }

  render () {
    const { children } = this.props
    const {
      arrowStyles,
      attributes,
      show,
      styles,
    } = this.state

    return (
      <Provider value={{
        arrowRef: this.arrowRef,
        arrowStyles,
        attributes,
        show,
        styles,
        toggle: this.toggle,
        tooltipRef: this.tooltipRef,
      }}>
        {children}
      </Provider>
    )
  }
}
