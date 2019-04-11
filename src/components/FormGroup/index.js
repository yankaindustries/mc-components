import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconError from '../Icons/Error'


export default class FormGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    help: PropTypes.string,
    label: PropTypes.string,
    maxlength: PropTypes.number,
    name: PropTypes.string.isRequired,
    optional: PropTypes.bool,
    touched: PropTypes.bool,
    value: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
      error,
      help,
      label,
      maxlength,
      name,
      optional,
      touched,
      value,
    } = this.props

    const showError = error && touched
    const classes = cn({
      'mc-form-group': true,
      [className]: className,
    })

    return (
      <div className={classes}>
        <div className='row no-gutters justify-content-between align-items-center'>
          <div className='col align-self-end'>
            {label &&
              <label
                htmlFor={name}
                className='d-block mc-text-h8 mc-text--left mc-mb-1'
              >
                {label}
              </label>
            }
          </div>

          {optional &&
            <div className='col-auto align-self-end'>
              <p className='mc-text-x-small mc-text--silenced mc-text--right mc-mb-1'>
                (Optional)
              </p>
            </div>
          }

          <div className='col-12'>
            {children}
          </div>

          <div className='col align-self-start'>
            {showError &&
              <p className='mc-text-x-small mc-text--error mc-text--left mc-mt-1'>
                <IconError />
                {error}
              </p>
            }

            {!showError &&
              <p className='mc-text-x-small mc-text--muted mc-text--left mc-mt-1'>
                {help}
              </p>
            }
          </div>

          <div className='col-auto align-self-start'>
            {maxlength &&
              <p className='mc-text-x-small mc-text--muted mc-text--right mc-mt-1'>
                {value.length} / {maxlength}
              </p>
            }
          </div>
        </div>
      </div>
    )
  }
}
