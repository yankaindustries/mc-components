import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import FormGroup from '../FormGroup'

export default class Textarea extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,

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
      disabled,
      error,
      label,
      name,
      touched,
      value,

      onChange,
      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const showError = error && touched

    const classes = cn({
      'mc-form-textarea': true,
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
      >
        <div className={classes}>
          <textarea
            name={name}
            id={name}
            className='mc-form-element__element'
            value={value}
            disabled={disabled}
            {...props}

            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      </FormGroup>
    )
  }
}
