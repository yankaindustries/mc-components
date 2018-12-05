import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Radio extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    name: PropTypes.string,
    option: PropTypes.string,

    onChange: PropTypes.func.isRequired,
  }

  render () {
    const {
      checked,
      label,
      className,
      name,
      onChange,
      option,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-input-radio': true,
      'mc-input-radio--checked': checked,
    })

    return (
      <label
        className={classes}
        htmlFor={name}
        onClick={() => onChange(option)}
      >
        <span
          className='mc-input-radio__button'
          name={name}
        />
        {label}
      </label>
    )
  }
}
