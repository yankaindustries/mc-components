import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import IconError from '../Icons/Error'


export default class FormGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
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

    return (
      <div className='mc-form-group mc-mb-5'>
        <div className='row no-gutters justify-content-between align-items-center mc-mb-4'>
          <div className='col align-self-end'>
            {label &&
              <label
                htmlFor={name}
                className='d-block mc-text-h8 mc-mb-1'
              >
                {label}
              </label>
            }
          </div>

          {optional &&
            <div className='col-auto align-self-end'>
              <p className='mc-text-x-small mc-text--silenced mc-mb-1'>
                (Optional)
              </p>
            </div>
          }

          <div className='col-12'>
            {children}
          </div>

          <div className='col align-self-start'>
            {showError &&
              <p className='mc-text-x-small mc-text--error mc-mt-1'>
                <IconError />
                {error}
              </p>
            }

            {!showError &&
              <p className='mc-text-x-small mc-text--muted mc-mt-1'>
                {help}
              </p>
            }
          </div>

          <div className='col-auto align-self-start'>
            {maxlength &&
              <p className='mc-text-x-small mc-text--muted mc-mt-1'>
                {value.length} / {maxlength}
              </p>
            }
          </div>
        </div>
      </div>
    )
  }
}
