import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


const DropdownContext = React.createContext('dropdown')

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

  toggle = () => {
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
      show,
    } = this.state

    const classes = cn({
      'mc-dropdown': true,
      [className]: className,
    })

    return (
      <Provider value={{ show, toggle: this.toggle }}>
        <div className={classes} {...restProps}>
          {children}
        </div>
      </Provider>
    )
  }
}
