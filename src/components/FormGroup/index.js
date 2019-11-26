import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconError from '../Icons/Error'
import {
  STATE_DEFAULT,
  STATE_ERROR,
  STATE_SUCCESS,
} from '../Forms/constants'
import { getState } from '../Forms/utils'
import { PROP_TYPE_CHILDREN } from '../constants'


export default class FormGroup extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN.isRequired,
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
    success: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
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
      success,
      touched,
      value,
    } = this.props

    const state = getState({ error, success, touched })
    const classes = cn({
      'mc-form-group': true,
      [`mc-form-group--${state}`]: state,
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
              <p className='mc-text-x-small mc-opacity--silenced mc-text--right mc-mb-1'>
                (Optional)
              </p>
            </div>
          }

          <div className='col-12'>
            {children}
          </div>

          <div className='col align-self-start'>
            {state === STATE_DEFAULT &&
              <p className='mc-text-x-small mc-opacity--muted mc-text--left mc-mt-1'>
                {help}
              </p>
            }

            {state === STATE_ERROR &&
              <p className='mc-text-x-small mc-text--error mc-text--left mc-mt-1'>
                <IconError />
                {error}
              </p>
            }

            {state === STATE_SUCCESS &&
              <p className='mc-text-x-small mc-text--success mc-text--left mc-mt-1'>
                {success}
              </p>
            }
          </div>

          <div className='col-auto align-self-start mc-ml-auto'>
            {maxlength &&
              <p className='mc-text-x-small mc-opacity--muted mc-text--right mc-mt-1'>
                {value.length} / {maxlength}
              </p>
            }
          </div>
        </div>
      </div>
    )
  }
}
