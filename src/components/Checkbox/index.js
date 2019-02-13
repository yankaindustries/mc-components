import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string,

    onChange: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const {
      checked,
      disabled,
      onChange,
    } = this.props

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
      'mc-mb-5': true,
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
