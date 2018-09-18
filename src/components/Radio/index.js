import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Radio extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    inverted: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    option: PropTypes.string,
  }

  render () {
    const {
      checked,
      label,
      className,
      inverted,
      name,
      onChange,
      option,
    } = this.props

    const classes = [
      className,
      'mc-input-radio',
      checked ? 'mc-input-radio--checked' : '',
      inverted ? 'mc-input-radio--invert' : '',
    ].join(' ')

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
