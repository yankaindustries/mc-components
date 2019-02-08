import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { find } from 'lodash'
import ReactSelect from 'react-select'


const PROP_TYPE_OPTION = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

const PROP_TYPE_OPTIONS = PropTypes.arrayOf(PROP_TYPE_OPTION)


export default class Select extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    label: PropTypes.string,
    name: PropTypes.string,
    options: PROP_TYPE_OPTIONS.isRequired,
    touched: PropTypes.bool,
    value: PropTypes.string.isRequired,

    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: '',
  }

  state = {
    focused: false,
  }

  getOptionByValue = value =>
    find(this.props.options, ['value', value])

  handleChange = ({ value }, { action }) => {
    if (action === 'select-option') {
      this.props.onChange(value)
    }
  }

  handleFocus = () => {
    const { onFocus } = this.props

    this.setState({ focused: true })

    if (onFocus) {
      onFocus()
    }
  }

  handleBlur = () => {
    const { onBlur } = this.props

    this.setState({ focused: false })

    if (onBlur) {
      onBlur()
    }
  }

  render () {
    const {
      disabled,
      error,
      label,
      name,
      options,
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
      'mc-form-select': true,
      'mc-form-element': true,
      'mc-form-element--disabled': disabled,
      'mc-form-element--error': showError,
      'mc-form-element--focus': focused,
    })

    return (
      <div className={classes}>
        <ReactSelect
          classNamePrefix='mc-form-select'
          className='mc-form-element__element'
          name={name}
          options={options}
          disabled={disabled}
          value={this.getOptionByValue(value)}
          {...props}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    )
  }
}
