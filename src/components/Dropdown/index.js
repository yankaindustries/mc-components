import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

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
  }

  state = {
    show: false,
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
    document.body.classList.remove('mc-dropdown__body--open')
  }

  handleResize = () => {
    const { target } = this.state

    if (target) {
      this.setState({
        position: getPosition(target),
      })
    }
  }

  toggle = (event) => {
    const { show } = this.state

    event.stopPropagation()

    if (!show) {
      event.persist()
      this.setState({
        position: getPosition(event.target),
        target: event.target,
      })
      document.body.classList.add('mc-dropdown__body--open')
    } else {
      document.body.classList.remove('mc-dropdown__body--open')
    }

    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render () {
    const { children } = this.props

    const {
      position,
      show,
    } = this.state

    return (
      <Provider value={{ position, show, toggle: this.toggle }}>
        <Fragment>
          {children}
        </Fragment>
      </Provider>
    )
  }
}
