import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


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

    const classes = cn({
      'mc-form-textarea': true,
      'mc-form-textarea--focus': focused,
      'mc-form-textarea--no-label': !label,
      'mc-form-textarea--modified': value,
      'mc-form-textarea--invert': inverted,
      'mc-form-textarea--disabled': disabled,
      'mc-form-textarea--error': error,
    })

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
