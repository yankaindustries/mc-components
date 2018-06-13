import React, { PureComponent } from 'react'
import { string, func, object, bool } from 'prop-types'
import cn from 'classnames'

export default class TextArea extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    placeholder: string,
    fullWidth: bool,
    resize: bool,
    style: object,
    error: string,
  }

  static defaultProps = {
    type: 'text',
    fullWidth: true,
    resize: false,
  }

  onChange = ({ target: { value } }) => {
    const { onChange } = this.props
    onChange(value)
  }

  render () {
    const {
      value,
      placeholder,
      style,
      fullWidth,
      error,
      resize,
      onChange,
      ...props
    } = this.props
    const inputClassNames = cn(
      'input-field__input',
      { 'input-field__input--full-width': fullWidth },
      { 'input-field__input--error': error },
      { 'input-field__input--no-resize': !resize },
    )

    return (
      <div style={style} className='input-field'>
        {error &&
          <span className='input-field__error'>{error}</span>
        }
        <textarea
          className={inputClassNames}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange}
          {...props}
        />
      </div>
    )
  }
}
