import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Popper from 'popper.js'


const DropdownContext = React.createContext('dropdown')

export const {
  Provider,
  Consumer,
} = DropdownContext


export default class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    placement: PropTypes.string,
  }

  static defaultProps = {
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

  componentDidMount () {
    this.renderDropdown()
  }

  componentWillUnmount () {
    document.body.classList.remove('mc-dropdown__body--open')
  }

  toggle = (event) => {
    const {
      lastTimeStamp,
      show,
    } = this.state

    if (event.persist) {
      event.persist()
    }

    if (event.timeStamp === lastTimeStamp) {
      return
    }

    if (!show) {
      document.body.classList.add('mc-dropdown__body--open')
    } else {
      document.body.classList.remove('mc-dropdown__body--open')
    }

    this.setState(prevState => ({
      lastTimeStamp: event.timeStamp,
      show: !prevState.show,
    }))
  }

  renderDropdown = () => {
    const { placement } = this.props

    this.tooltip = new Popper(
      this.toggleRef.current,
      this.dropdownRef.current,
      {
        placement,
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
        arrowStyles: data.arrowStyles,
        attributes: data.attributes,
        styles: data.styles,
      })
    }

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
