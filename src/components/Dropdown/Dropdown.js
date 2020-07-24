import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import { PROP_TYPE_CHILDREN } from '../constants'


const DropdownContext = React.createContext('dropdown')

export const {
  Provider,
  Consumer,
} = DropdownContext


export default class Dropdown extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    fixed: PropTypes.bool,
    placement: PropTypes.string,
  }

  static defaultProps = {
    fixed: false,
    placement: 'bottom-start',
  }

  state = {
    show: false,
    lastTimestamp: 0,
  }

  toggleRef = React.createRef()
  dropdownRef = React.createRef()
  arrowRef = React.createRef()

  componentDidMount () {
    this.renderDropdown()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.placement !== this.props.placement) {
      this.renderDropdown()
    }
  }

  toggle = (event) => {
    const { lastTimeStamp } = this.state

    if (event.persist) {
      event.persist()
    }

    if (event.timeStamp === lastTimeStamp) {
      return
    }

    this.tooltip.update()

    this.setState(prevState => ({
      lastTimeStamp: event.timeStamp,
      show: !prevState.show,
    }))
  }

  renderDropdown = () => {
    const { fixed, placement } = this.props

    this.tooltip = new Popper(
      findDOMNode(this.toggleRef.current),
      this.dropdownRef.current,
      {
        placement,
        positionFixed: fixed || window.innerWidth <= 576,
        modifiers: {
          applyStyle: {
            enabled: true,
            fn: this.applyStyle,
          },
        },
      },
    )
  }

  applyStyle = (data) => {
    if (window.innerWidth > 576) {
      this.setState({
        attributes: { 'x-placement': data.attributes['x-placement'] },
        styles: data.styles,
      })
    }

    return data
  }

  render () {
    const { children } = this.props
    const {
      attributes,
      show,
      styles,
    } = this.state

    return (
      <Provider value={{
        dropdownRef: this.dropdownRef,
        toggle: this.toggle,
        toggleRef: this.toggleRef,
        attributes,
        show,
        styles,
      }}>
        {children}
      </Provider>
    )
  }
}
