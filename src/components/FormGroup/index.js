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
        <div className='row no-gutters justify-content-between align-items-end mc-mb-4'>
          <div className='col-9'>
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
            <div className='col-auto'>
              <p className='mc-text-x-small mc-text--silenced mc-mb-1'>
                (Optional)
              </p>
            </div>
          }

          <div className='col-12'>
            {children}
          </div>

          <div className='col-9'>
            {showError &&
              <span className='mc-text-x-small mc-text--error'>
                <IconError />
                {error}
              </span>
            }

            {!showError &&
              <span className='mc-text-x-small mc-text--muted'>
                {help}
              </span>
            }
          </div>

          <div className='col-auto'>
            {maxlength &&
              <span className='mc-text-x-small mc-text--muted'>
                {value.length} / {maxlength}
              </span>
            }
          </div>
        </div>
      </div>
    )
  }
}
