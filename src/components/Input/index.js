import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Input extends PureComponent {
  static propTypes = {
    inverted: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  state = {
    focused: false,
  }

  render () {
    const {
      append,
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
    ].join(' ')

    return (
      <div className={classes}>
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
            onChange={onChange}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            {...props}
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
