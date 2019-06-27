import React, { PureComponent } from 'react'
import cn from 'classnames'

import { PROP_TYPE_INPUT } from '../Forms/constants'
import { getState } from '../Forms/utils'


export default class Input extends PureComponent {
  static propTypes = {
    ...PROP_TYPE_INPUT,
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
      className,
      disabled,
      error,
      maxlength,
      name,
      prepend,
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
      'mc-form-input': true,
      'mc-form-element': true,
      'mc-form-element--disabled': disabled,
      'mc-form-element--focus': focused,
      [`mc-form-element--${state}`]: state,
      [className]: className,
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
