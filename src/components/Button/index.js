import React, { Fragment } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Loader from '../Icons/Loader'


const Button = ({
  children,
  className,
  onClick,
  secondary,
  tertiary,
  fullWidth,
  link,
  loading,
  Icon,
  kind,
  ...props
}) => {
  const classNames = cn({
    [className]: Boolean(className),
    'c-button': true,
    'c-button--secondary': secondary,
    'c-button--tertiary': tertiary,
    'c-button--full-width': fullWidth,
    'c-button--link': link,
    'c-button--loading': loading,
    [`c-button--${kind}`]: kind,
  })

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...props}
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

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  link: PropTypes.bool,
  loading: PropTypes.bool,
  Icon: PropTypes.node,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'link',
    'success',
    'facebook',
    'twitter',
    'google',
    'pinterest',
    'applepay',
    'paypal',
  ]),
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  secondary: false,
  tertiary: false,
  fullWidth: false,
  link: false,
  loading: false,
  kind: 'primary',
}

export default Button
