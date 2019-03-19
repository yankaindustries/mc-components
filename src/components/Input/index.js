import React, { PureComponent } from 'react'
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
    maxlength: PropTypes.number,
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

  onFocus = (event) => {
    const { onFocus } = this.props

    this.setState({
      focused: true,
    })

    if (onFocus) {
      onFocus(event)
    }
  }

  onBlur = (event) => {
    const { onBlur } = this.props

    this.setState({
      focused: false,
    })

    if (onBlur) {
      onBlur(event)
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
      maxlength,
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
          className='mc-form-element__element'
          {...props}
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
    )
  }
}
