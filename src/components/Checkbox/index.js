import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PROP_TYPE_CHILDREN,
    name: PropTypes.string,

    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  }

  handleClick = (event) => {
    const {
      checked,
      disabled,
      onChange,
      onFocus,
      onBlur,
    } = this.props

    event.preventDefault()

    if (onFocus) onFocus(event)
    if (onBlur) onBlur(event)

    return !disabled && onChange(!checked)
  }

  render () {
    const {
      checked,
      className,
      disabled,
      label,
      name,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-input-checkbox': true,
      'mc-input-checkbox--checked': checked,
      'mc-input-checkbox--disabled': disabled,
      'mc-mb-2': true,
    })

    return (
      <label
        className={classes}
        id={`${name}-label`}
        htmlFor={name}
        onClick={this.handleClick}
      >
        <div>
          <span
            className='mc-input-checkbox__fauxbox mc-mr-3'
            role='checkbox'
            aria-checked={checked}
            aria-labelledby={`${name}-label`}
          />
          <input
            type='checkbox'
            name={name}
            className='mc-input-checkbox__realbox'
            value={checked}
            disabled={disabled}
          />
        </div>
        <span>
          {label}
        </span>
      </label>
    )
  }
}
