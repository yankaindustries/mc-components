import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Input extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    help: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    touched: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }

  static defaultProps = {
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
      disabled,
      error,
      help,
      label,
      name,
      prepend,
      touched,
      value,

      onChange,

      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const showError = error && touched
    const hasLabel = label || showError

    const classes = cn({
      'mc-form-input': true,
      'mc-form-input--disabled': disabled,
      'mc-form-input--error': showError,
      'mc-form-input--focus': focused,
      'mc-form-input--modified': value,
      'mc-form-input--no-label': !hasLabel,
    })

    return (
      <Fragment>
        <div
          className={classes}
          onClick={this.focus}
        >
          {prepend &&
            <div className='mc-form-prepend'>
              {prepend}
            </div>
          }

          <div className='mc-form-input__input'>
            <input
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

            {hasLabel &&
              <label
                htmlFor={name}
                className='mc-form-input__label'
              >
                {(touched && error) || label}
              </label>
            }
          </div>

          {append &&
            <div className='mc-form-append'>
              {append}
            </div>
          }
        </div>

        {help &&
          <span className='mc-form-help'>
            {help}
          </span>
        }
      </Fragment>
    )
  }
}
