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

  dropdownRef = React.createRef()

  componentWillUnmount () {
    document.body.classList.remove('mc-dropdown__body--open')
  }

  toggle = (event) => {
    const {
      placement,
    } = this.props
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

    if (this.dropdown) {
      this.dropdown.update()
    } else {
      this.dropdown = new Popper(
        event.currentTarget,
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

  applyStyle = (data) => {
    this.setState({
      attributes: data.attributes,
      styles: data.styles,
    })
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
        attributes,
        dropdownRef: this.dropdownRef,
        show,
        styles,
        toggle: this.toggle,
      }}>
        {children}
      </Provider>
    )
  }
}
