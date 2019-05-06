import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


const DropdownContext = React.createContext('dropdown')

const getPosition = (el) => {
  const bodyRect = document.body.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  return {
    left: elRect.left - bodyRect.left,
    top: (elRect.top - bodyRect.top) + el.offsetHeight,
  }
}

export const {
  Provider,
  Consumer,
} = DropdownContext

export default class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  state = {
    show: false,
  }

  componentWillUnmount () {
    document.body.classList.remove('mc-dropdown__body--open')
  }


  toggle = (event) => {
    const { show } = this.state
    const position = getPosition(event.target)

    if (!show) {
      event.persist()
      this.setState({ position })
      document.body.classList.add('mc-dropdown__body--open')
    } else {
      document.body.classList.remove('mc-dropdown__body--open')
    }

    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render () {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const {
      position,
      show,
    } = this.state

    const classes = cn({
      'mc-dropdown': true,
      [className]: className,
    })

    return (
      <Provider value={{ position, show, toggle: this.toggle }}>
        <div className={classes} {...restProps}>
          {children}
        </div>
      </Provider>
    )
  }
}
