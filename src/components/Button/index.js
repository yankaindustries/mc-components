import React from 'react'
import cn from 'classnames'
import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types'
import ButtonLoader from '../ButtonLoader'

const Button = ({
  children,
  className,
  onClick,
  primary,
  secondary,
  tertiary,
  fullWidth,
  text,
  loading,
  Icon,
  ...props
}) => {
  const classNames = cn(
    'c-button',
    { [className]: Boolean(className) },
    {
      'c-button--primary': primary,
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
      'c-button--with-icon': Boolean(Icon),
      'c-button--full-width': fullWidth,
      'c-button--text': text,
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
      {loading && <ButtonLoader />}
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
  primary: bool,
  secondary: bool,
  tertiary: bool,
  fullWidth: bool,
  text: bool,
  loading: bool,
  Icon: node,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  secondary: false,
  tertiary: false,
  fullWidth: false,
  text: false,
  loading: false,
}

export default Button
