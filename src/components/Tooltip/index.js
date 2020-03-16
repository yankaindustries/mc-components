import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import { PROP_TYPE_CHILDREN } from '../constants'


const TooltipContext = React.createContext('tooltip')

export const {
  Provider,
  Consumer,
} = TooltipContext

export const PLACEMENTS = [
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
]

const PROP_TYPE_PLACEMENT = PropTypes.oneOf(PLACEMENTS)


export default class Tooltip extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    placement: PROP_TYPE_PLACEMENT,
  }

  static defaultProps = {
    placement: 'top',
  }

  state = {
    show: false,
  }

  toggleRef = React.createRef()
  tooltipRef = React.createRef()
  arrowRef = React.createRef()

  componentDidMount () {
    this.renderTooltip()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.placement !== this.props.placement) {
      this.renderTooltip()
    }
  }

  renderTooltip = () => {
    const { placement } = this.props

    this.tooltip = new Popper(
      findDOMNode(this.toggleRef.current),
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

  toggle = () => {
    this.tooltip.update()
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
        toggleRef: this.toggleRef,
        tooltipRef: this.tooltipRef,
      }}>
        {children}
      </Provider>
    )
  }
}
