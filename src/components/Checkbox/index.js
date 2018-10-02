import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    inverted: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string,

    onChange: PropTypes.func.isRequired,
  }

  render () {
    const {
      label,
      className,
      inverted,
      name,
      onChange,
      checked,
    } = this.props

    const classes = [
      className,
      'mc-input-checkbox',
      checked ? 'mc-input-checkbox--checked' : '',
      inverted ? 'mc-input-checkbox--invert' : '',
    ].join(' ')

    return (
      <label
        className={classes}
        id={`${name}-label`}
        htmlFor={name}
        onChange={() => onChange(!checked)}
      >
        <span
          className='mc-input-checkbox__fauxbox'
          role='checkbox'
          aria-checked={checked}
          aria-labelledby={`${name}-label`}
        >
        </span>
        <input
          type='checkbox'
          id={name}
          className='mc-input-checkbox__realbox'
        />
        {label}
      </label>
    )
  }
}
