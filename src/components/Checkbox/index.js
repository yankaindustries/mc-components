import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


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

    const classes = cn({
      [className]: className,
      'mc-input-checkbox': true,
      'mc-input-checkbox--checked': checked,
      'mc-input-checkbox--invert': inverted,
    })

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
