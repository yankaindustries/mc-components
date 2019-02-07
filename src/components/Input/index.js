import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import FormGroup from '../FormGroup'


export default class Input extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    help: PropTypes.string,
    counter: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    fieldText: PropTypes.string,
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
      fieldText,
      counter,
      label,
      name,
      prepend,
      touched,
      value,
      required,

      onChange,

      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const showError = error && touched

    const classes = cn({
      'mc-form-input': true,
      'mc-form-element': true,
      'mc-form-element--disabled': disabled,
      'mc-form-element--error': showError,
      'mc-form-element--focus': focused,
    })

    return (
      <FormGroup
        disabled={disabled}
        error={error}
        label={label}
        touched={touched}
        required={required}
      >
        <div
          className={classes}
          onClick={this.focus}
        >
          {prepend &&
            <div className='mc-form-prepend'>
              {prepend}
            </div>
          }

          <input
            name={name}
            type='text'
            value={value}
            disabled={disabled}
            {...props}
            className='mc-form-element__element'
            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref={this.input}
          />

          {append &&
            <div className='mc-form-append'>
              {append}
            </div>
          }
        </div>

        {(help || counter) &&
          <div className='row no-gutters justify-content-between align-items-end mc-mb-2'>
            <div className='col-auto'>
              {help &&
                <span className='mc-form-help'>
                  {help}
                </span>
              }
            </div>

            <div className='col-auto'>
              { counter &&
                <span className='mc-form-counter'>
                  {counter}
                </span>
              }
            </div>
          </div>
        }
      </FormGroup>
    )
  }
}
