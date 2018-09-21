import React, { PureComponent } from 'react'
import { string, func, bool, object } from 'prop-types'
import cn from 'classnames'

export default class RadioInput extends PureComponent {
  static propTypes = {
    label: string.isRequired,
    onChange: func.isRequired,
    checked: bool,
    style: object,
  }

  static defaultProps = {
    checked: false,
  }

  render () {
    const {
      checked,
      label,
      style,
      onChange,
      ...props
    } = this.props
    const classNames = cn(
      'radio-input__mock',
      { 'radio-input__mock--checked': checked },
    )

    return (
      <div
        style={style}
        className='radio-input'
        onClick={onChange}
      >
        <input
          className='radio-input__input'
          checked={checked}
          type='radio'
          {...props}
        />
        <div className={classNames} />
        <label className='radio-input__label'>
          {label}
        </label>
      </div>
    )
  }
}
