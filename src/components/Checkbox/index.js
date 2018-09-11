import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Checkbox extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    inverted: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
  }

  render () {
    const {
      children,
      className,
      inverted,
      name,
      onChange,
      value,
    } = this.props

    const classes = [
      className,
      'mc-input-checkbox',
      value ? 'mc-input-checkbox--checked' : '',
      inverted ? 'mc-input-checkbox--invert' : '',
    ].join(' ')

    return (
      <label
        className={classes}
        id={`${name}-label`}
        htmlFor={name}
        onClick={onChange.bind(null, !value)}
      >
        <span
          className='mc-input-checkbox__fauxbox'
          role='checkbox'
          aria-checked={value}
          aria-labelledby={`${name}-label`}
        >
        </span>
        <input
          type='checkbox'
          id={name}
          className='mc-input-checkbox__realbox'
        />
        {children}
      </label>
    )
  }
}
