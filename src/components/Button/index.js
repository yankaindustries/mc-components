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
  link,
  linkMuted,
  fullWidth,
  text,
  loading,
  Icon,
  ...props
}) => {
  const classNames = cn(
    { [className]: Boolean(className) },
    {
      'mc-btn mc-btn--primary': primary,
      'mc-btn mc-btn--secondary': secondary,
      'mc-btn mc-btn--link': link,
      'mc-btn mc-btn--link-muted': linkMuted,
      'c-button c-button--with-icon': Boolean(Icon),
      'c-button c-button--full-width': fullWidth,
      'c-button c-button--text': text,
      'c-button c-button--loading': loading,
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
