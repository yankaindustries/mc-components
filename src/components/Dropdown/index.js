import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ClickOutside from '../ClickOutside'


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

  toggle = (event) => {
    event.stopPropagation()
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
      'mc-dropdown--active': show,
      [className]: className,
    })

    return (
      <Provider value={{ show, toggle: this.toggle }}>
        <ClickOutside onClickOutside={show ? this.toggle : () => {}}>
          <div className={classes} {...restProps}>
            {children}
          </div>
        </ClickOutside>
      </Provider>
    )
  }
}
