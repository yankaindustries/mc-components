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

  handleClick = () =>
    console.log('handleClick', this.props.option) ||
    this.props.onChange(this.props.option)

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
    })

    return (
      <label
        className={classes}
        htmlFor={name}
        onClick={this.handleClick}
      >
        <span className='mc-input-radio__fauxbox' />
        <input
          type='radio'
          name={name}
          className='mc-input-radio__realbox'
          value={option}
        />
        {label}
      </label>
    )
  }
}
