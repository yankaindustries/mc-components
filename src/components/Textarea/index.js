import React, { PureComponent } from 'react'
import cn from 'classnames'

import { PROP_TYPE_INPUT } from '../Forms/constants'
import { getState } from '../Forms/utils'


export default class Textarea extends PureComponent {
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

    this.setState({ focused: true })

    if (onFocus) {
      onFocus(event)
    }
  }

  onBlur = (event) => {
    const { onBlur } = this.props

    this.setState({ focused: false })

    if (onBlur) {
      onBlur(event)
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
      'mc-form-textarea': true,
      'mc-form-element': true,
      'mc-form-element--disabled': disabled,
      'mc-form-element--focus': focused,
      [`mc-form-element--${state}`]: state,
    })

    return (
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
    )
  }
}
