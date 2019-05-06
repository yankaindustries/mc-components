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
