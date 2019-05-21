import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Loader from '../Icons/Loader'


export default class Button extends PureComponent {
  static propTypes = {
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
      'link',
      'paypal',
      'pinterest',
      'primary',
      'secondary',
      'success',
      'tertiary',
      'twitter',
    ]),
    link: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
    symmetrical: PropTypes.bool,
    tertiary: PropTypes.bool,
  }

  static defaultProps = {
    kind: 'primary',
  }

  render () {
    const {
      children,
      className,
      secondary,
      tertiary,
      fullWidth,
      link,
      loading,
      symmetrical,
      rounded,
      kind,
      ...restProps
    } = this.props

    const classNames = cn({
      'c-button': true,
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
      'c-button--full-width': fullWidth,
      'c-button--link': link,
      'c-button--loading': loading,
      'c-button--symmetrical': symmetrical,
      'c-button--symmetrical mc-corners--circle': rounded,
      [`c-button--${kind}`]: kind,
      [className]: Boolean(className),
    })

    return (
      <button
        className={classNames}
        {...restProps}
      >
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
      </button>
    )
  }
}
