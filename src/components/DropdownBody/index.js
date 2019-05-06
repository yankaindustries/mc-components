import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'


import { Consumer } from '../Dropdown'
import ClickOutside from '../ClickOutside'
import Icon from '../Icons'


export default class DropdownBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  renderDropdown = () => {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = show => cn({
      'mc-dropdown__body': true,
      'mc-dropdown__body--active': show,
      [className]: className,
    })


    const style = (position) => {
      if (window.innerWidth >= 576) {
        return position
      }

      return {}
    }

    return (
      <Consumer>
        {({ position, show, toggle }) =>
          <ClickOutside onClickOutside={show ? toggle : () => {}}>
            <div
              className={classes(show)}
              style={style(position)}
              {...restProps}
            >
              <div className='d-block d-sm-none mc-text--right'>
                <a className='d-inline-block mc-p-2' onClick={toggle}>
                  <Icon kind='close' />
                </a>
              </div>
              {children}
            </div>
          </ClickOutside>
        }
      </Consumer>
    )
  }

  render () {
    return createPortal(
      this.renderDropdown(),
      document.body,
    )
  }
}
