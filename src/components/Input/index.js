import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Input extends PureComponent {
  static propTypes = {
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    inverted: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }

  static defaultProps = {
    inverted: false,
    disabled: false,
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
      append,
      error,
      inverted,
      disabled,
      label,
      name,
      prepend,
      value,
      onChange,
      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const classes = [
      'mc-form-textbox',
      focused ? 'mc-form-textbox--focus' : '',
      label ? '' : 'mc-form-textbox--no-label',
      value ? 'mc-form-textbox--modified' : '',
      inverted ? 'mc-form-textbox--invert' : '',
      disabled ? 'mc-form-textbox--disabled' : '',
      error ? 'mc-form-textbox--error' : '',
    ].join(' ')

    return (
      <div
        className={classes}
        onClick={this.focus}
      >
        {prepend &&
          <div className='mc-form-prepend'>
            {prepend}
          </div>
        }

        <div className='mc-form-textbox__input'>
          <input
            id={name}
            name={name}
            type='text'
            value={value}
            disabled={disabled}
            {...props}
            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref={this.input}
          />

          {label &&
            <label
              htmlFor={name}
              className='mc-form-textbox__label'
            >
              {label}
            </label>
          }
        </div>

        {append &&
          <div className='mc-form-append'>
            {append}
          </div>
        }
      </div>
    )
  }
}
