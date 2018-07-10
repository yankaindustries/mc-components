import React, { PureComponent } from 'react'
import { string, func, object, bool } from 'prop-types'
import cn from 'classnames'
import MailCheck from 'react-mailcheck'

export default class Input extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    placeholder: string,
    type: string,
    label: string,
    fullWidth: bool,
    style: object,
    error: string,
    disabled: bool,
    shouldUseMailcheck: bool,
  }

  static defaultProps = {
    type: 'text',
    fullWidth: true,
    disabled: false,
    shouldUseMailcheck: false,
  }

  onChange = ({ target: { value } }) => {
    const { onChange } = this.props
    onChange(value)
  }

  render () {
    const {
      value,
      type,
      placeholder,
      label,
      style,
      fullWidth,
      error,
      disabled,
      onChange,
      shouldUseMailcheck,
      ...props
    } = this.props
    const showLabel = label && placeholder && value
    const inputClassNames = cn(
      'input-field__input',
      { 'input-field__input--with-label': showLabel },
      { 'input-field__input--full-width': fullWidth },
      { 'input-field__input--error': error },
      { 'input-field__input--disabled': disabled },
    )
    const labelClassNames = cn(
      'input-field__label',
      { 'input-field__label--hide': !showLabel },
    )

    const inputToShow = (
      <input
        className={inputClassNames}
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={this.onChange}
        {...props}
      />
    )

    if (shouldUseMailcheck) {
      return (
        <MailCheck email={value}>
          {suggestion => (
            <div style={style} className='input-field'>
              {label &&
                <label className={labelClassNames}>{label}</label>
              }
              {error &&
                <span className='input-field__error'>{error}</span>
              }
              {suggestion &&
                <span className='input-field__error'>
                  Did you mean {suggestion.full}?
                </span>
              }
              {inputToShow}
            </div>
          )}
        </MailCheck>
      )
    }
    return (
      <div style={style} className='input-field'>
        {label &&
          <label className={labelClassNames}>{label}</label>
        }
        {error &&
          <span className='input-field__error'>{error}</span>
        }
        {inputToShow}
      </div>
    )
  }
}
