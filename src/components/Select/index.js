import React, { PureComponent } from 'react'
import cn from 'classnames'
import { find } from 'lodash'
import ReactSelect from 'react-select'

import {
  PROP_TYPE_INPUT,
  PROP_TYPE_OPTIONS,
} from '../Forms/constants'
import { getState } from '../Forms/utils'


export default class Select extends PureComponent {
  static propTypes = {
    ...PROP_TYPE_INPUT,
    options: PROP_TYPE_OPTIONS.isRequired,
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

  handleFocus = (event) => {
    const { onFocus } = this.props

    this.setState({ focused: true })

    if (onFocus) {
      onFocus(event)
    }
  }

  handleBlur = (event) => {
    const { onBlur } = this.props

    this.setState({ focused: false })

    if (onBlur) {
      onBlur(event)
    }
  }

  render () {
    const {
      disabled,
      error,
      label,
      name,
      options,
      required,
      success,
      touched,
      value,

      onChange,

      ...props
    } = this.props

    const {
      focused,
    } = this.state

    const state = getState({ error, success, touched })
    const classes = cn({
      'mc-form-select': true,
      'mc-form-element': true,
      'mc-form-element--disabled': disabled,
      'mc-form-element--focus': focused,
      [`mc-form-element--${state}`]: state,
    })

    return (
      <div className={classes}>
        <ReactSelect
          classNamePrefix='mc-form-select'
          className='mc-form-element__element'
          name={name}
          options={options}
          isDisabled={disabled}
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
