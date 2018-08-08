import React from 'react'
import cn from 'classnames'
import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types'

import Loader from '../../assets/icons/loader.svg'


const Button = ({
  children,
  className,
  onClick,
  secondary,
  tertiary,
  fullWidth,
  text,
  link,
  linkMuted,
  loading,
  Icon,
  ...props
}) => {
  const classNames = cn(
    'c-button',
    { [className]: Boolean(className) },
    {
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
      'c-button--with-icon': Boolean(Icon),
      'c-button--full-width': fullWidth,
      'c-button--text': text,
      'c-button--link': link,
      'c-button--link-muted': linkMuted,
      'c-button--loading': loading,
    },
  )

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
  text: bool,
  link: bool,
  linkMuted: bool,
  loading: bool,
  Icon: node,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  secondary: false,
  tertiary: false,
  fullWidth: false,
  text: false,
  link: false,
  linkMuted: false,
  loading: false,
}

export default Button
