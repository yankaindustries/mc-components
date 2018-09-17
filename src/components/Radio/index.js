import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Radio extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    inverted: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  render () {
    const {
      checked,
      children,
      className,
      inverted,
      name,
      onChange,
      value,
    } = this.props

    const classes = [
      className,
      'mc-input-radio',
      checked ? 'mc-input-radio--checked' : '',
      inverted ? 'mc-input-radio--invert' : '',
    ].join(' ')

    return (
      <div
        className={classes}
        onClick={onChange.bind(null, value)}
      >
        <span
          className='mc-input-radio__button'
          name={name}
        />
        <label
          className='mc-input-radio__label'
          htmlFor={name}
        >
          {children}
        </label>
      </div>
    )
  }
}
