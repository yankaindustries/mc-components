import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Radio extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    name: PropTypes.string,
    option: PropTypes.string,

    onChange: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const {
      disabled,
      option,
      onChange,
    } = this.props

    return !disabled && onChange(option)
  }

  render () {
    const {
      checked,
      disabled,
      label,
      className,
      name,
      option,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-input-radio': true,
      'mc-input-radio--checked': checked,
      'mc-input-radio--disabled': disabled,
      'mc-mb-5': true,
    })

    return (
      <label
        className={classes}
        htmlFor={name}
        onClick={this.handleClick}
      >
        <span className='mc-input-radio__fauxbox mc-mr-4' />
        <input
          type='radio'
          name={name}
          className='mc-input-radio__realbox'
          value={option}
          disabled={disabled}
        />
        {label}
      </label>
    )
  }
}
