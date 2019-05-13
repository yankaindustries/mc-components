import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { noop } from 'lodash'


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
      'mc-dropdown': true,
      'mc-dropdown--active': show,
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
          <ClickOutside
            className={classes(show)}
            onClickOutside={show ? toggle : noop}
            style={style(position)}
            {...restProps}
          >
            <div className='mc-dropdown__body-container'>
              <div className='d-block d-sm-none mc-dropdown__close'>
                <a className='d-inline-block mc-p-2' onClick={toggle}>
                  <Icon kind='close' className='mc-dropdown__close-icon' />
                </a>
              </div>
              <div className='mc-dropdown__body'>
                {children}
              </div>
            </div>

            <div className='mc-dropdown__backdrop' onClick={toggle} />
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
