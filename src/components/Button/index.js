import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Loader from '../Icons/Loader'


export default class Button extends PureComponent {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node,
      PropTypes.func,
    ]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    kind: PropTypes.oneOf([
      'applepay',
      'facebook',
      'google',
      'messenger',
      'link',
      'linked-in',
      'paypal',
      'pinterest',
      'primary',
      'secondary',
      'success',
      'tertiary',
      'twitter',
    ]),
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf([
      'small',
      'medium',
    ]),
    symmetrical: PropTypes.bool,
  }

  static defaultProps = {
    as: 'button',
    kind: 'primary',
    size: 'medium',
  }

  element = React.createRef()

  render () {
    const {
      as,
      children,
      className,
      fullWidth,
      kind,
      loading,
      rounded,
      size,
      symmetrical,
      ...props
    } = this.props

    const classNames = cn({
      'c-button': true,
      'c-button--full-width': fullWidth,
      'c-button--loading': loading,
      'c-button--symmetrical': symmetrical,
      'c-button--symmetrical mc-corners--circle': rounded,
      [`c-button--${kind}`]: kind,
      [`c-button--${size}`]: size,
      [className]: className,
    })

    return React.createElement(
      as,
      {
        className: classNames,
        ref: this.element,
        ...props,
      },
      <Fragment>
        {!loading &&
          children
        }
        {loading &&
          <Fragment>
            <span className='c-button__content'>
              {children}
            </span>
            <Loader className='c-button__loader' />
          </Fragment>
        }
      </Fragment>,
    )
  }
}
