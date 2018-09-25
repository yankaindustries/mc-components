import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Textarea extends PureComponent {
  static propTypes = {
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    inverted: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }

  static defaultProp = {
    value: '',
  }

  state = {
    focused: false,
  }

  constructor (props) {
    super(props)

    this.input = React.createRef()
  }

  onFocus = () => {
    const { onFocus } = this.props

    this.setState({ focused: true })

    if (onFocus) {
      onFocus()
    }
  }

  onBlur = () => {
    const { onBlur } = this.props

    this.setState({ focused: false })

    if (onBlur) {
      onBlur()
    }
  }

  focus = () => {
    this.input.current.focus()
  }

  render () {
    const {
      disabled,
      error,
      inverted,
      label,
      name,
      placeholder,
      value,
      onChange,
      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const classes = [
      'mc-form-textarea',
      focused ? 'mc-form-textarea--focus' : '',
      label ? '' : 'mc-form-textarea--no-label',
      value ? 'mc-form-textarea--modified' : '',
      inverted ? 'mc-form-textarea--invert' : '',
      disabled ? 'mc-form-textarea--disabled' : '',
      error ? 'mc-form-textarea--error' : '',
    ].join(' ')

    return (
      <div className={classes}>
        <textarea
          name={name}
          id={name}
          className='mc-form-textarea__textarea'
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          {...props}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <label
          htmlFor={name}
          className='mc-form-textarea__label'>
          {label}
        </label>
      </div>
    )
  }
}
