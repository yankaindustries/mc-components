import React, { Fragment, PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'
import ClickOutside from '../ClickOutside'
import Backdrop from '../Backdrop'
import Icon from '../Icons'
import { PROP_TYPE_CHILDREN } from '../constants'
import { getClosest } from '../helpers'

export default class DropdownContentControlled extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    inverted: PropTypes.bool,
    show: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    onClose: () => {},
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

    this.toggleHtmlClassName(this.props.show)
  }

  componentDidUpdate () {
    this.toggleHtmlClassName(this.props.show)
  }

  componentWillUnmount () {
    this.toggleHtmlClassName(false)
  }

  toggleHtmlClassName (isShown) {
    const rootHtml = document.getElementsByTagName('html')[0]
    if (!isShown) {
      rootHtml.classList.remove('mc-dropdown__html--open')
    } else {
      rootHtml.classList.add('mc-dropdown__html--open')
    }
  }

  handleClose = source => (event) => {
    const { show, onClose } = this.props

    if (!show) {
      return
    }

    onClose(source, event)
  }

  renderDropdown = () => {
    const {
      children,
      className,
      show,
      ...props
    } = this.props

    const {
      inverted,
    } = this.state

    const classes = cn({
      'mc-dropdown': true,
      'mc-dropdown--active': show,
      'mc-invert': inverted,
      [className]: className,
    })

    return (
      <Consumer>
        {({
          attributes,
          dropdownRef,
          styles,
        }) =>
          <ClickOutside
            divRef={dropdownRef}
            onClickOutside={this.handleClose('outside')}
          >
            <div
              role='dropdown'
              className={classes}
              ref={dropdownRef}
              style={styles}
              {...attributes}
              {...props}
            >
              <Backdrop
                className='mc-dropdown__backdrop'
                kind={'dark'}
              />
              <div className='mc-dropdown__content-container'>
                <div className='d-block d-sm-none mc-dropdown__close'>
                  <a
                    className='d-inline-block mc-p-2'
                    onClick={this.handleClose('close')}
                  >
                    <Icon kind='close' className='mc-dropdown__close-icon' />
                  </a>
                </div>

                <div className='mc-dropdown__content'>
                  {children}
                </div>
              </div>
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
