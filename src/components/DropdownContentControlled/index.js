import React, { Fragment, PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { noop } from 'lodash'

import { Consumer } from '../Dropdown'
import ClickOutside from '../ClickOutside'
import Icon from '../Icons'
import { getClosest } from '../helpers'


export default class DropdownContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inverted: PropTypes.bool,
    show: PropTypes.bool,
  }

  state = {
    checkedInvert: false,
    inverted: false,
  }

  placeholder = React.createRef()

  componentDidMount () {
    const placeholder = this.placeholder && this.placeholder.current

    if (getClosest(placeholder, '.mc-invert')) {
      this.setState({ inverted: true })
    }

    this.setState({ checkedInvert: true })
  }

  renderDropdown = () => {
    const {
      children,
      className,
      show,
      ...props
    } = this.props

    const { inverted } = this.state

    const classes = cn({
      'mc-dropdown': true,
      'mc-dropdown--active': show,
      'mc-invert': inverted,
      [className]: className,
    })

    return (
      <Consumer>
        {({
          arrowRef,
          arrowStyles,
          attributes,
          dropdownRef,
          styles,
          toggle,
        }) =>
          <ClickOutside onClickOutside={show ? toggle : noop}>
            <div
              className={classes}
              ref={dropdownRef}
              style={styles}
              {...attributes}
              {...props}
            >
              <div className='mc-dropdown__content-container'>
                <div className='d-block d-sm-none mc-dropdown__close'>
                  <a className='d-inline-block mc-p-2' onClick={toggle}>
                    <Icon kind='close' className='mc-dropdown__close-icon' />
                  </a>
                </div>
                <div className='mc-dropdown__content'>
                  {children}
                </div>
              </div>

              <div
                className='mc-dropdown__backdrop'
                onClick={toggle}
              />

              <div
                className='mc-dropdown__arrow'
                ref={arrowRef}
                style={arrowStyles}
              />
            </div>
          </ClickOutside>
        }
      </Consumer>
    )
  }

  render () {
    const { checkedInvert } = this.state

    return (
      <Fragment>
        {!checkedInvert &&
          <div ref={this.placeholder} />
        }

        {createPortal(
          this.renderDropdown(),
          document.body,
        )}
      </Fragment>
    )
  }
}
