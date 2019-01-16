import React from 'react'
import cn from 'classnames'
import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types'

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
  ...props
}) => {
  const classNames = cn({
    [className]: Boolean(className),
    'c-button': true,
    'c-button--secondary': secondary,
    'c-button--tertiary': tertiary,
    'c-button--with-icon': Boolean(Icon),
    'c-button--full-width': fullWidth,
    'c-button--link': link,
    'c-button--loading': loading,
  })

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...props}
    >
      {Boolean(Icon) && Icon}
      <span>
        {children}
      </span>
      {loading && <Loader className='loader' />}
    </button>
  )
}

Button.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
    string,
  ]),
  className: string,
  onClick: func,
  secondary: bool,
  tertiary: bool,
  fullWidth: bool,
  link: bool,
  loading: bool,
  Icon: node,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  secondary: false,
  tertiary: false,
  fullWidth: false,
  link: false,
  loading: false,
}

export default Button
