import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class FormGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    counter: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    help: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    touched: PropTypes.bool,
  }

  render () {
    const {
      children,
      counter,
      disabled,
      error,
      help,
      label,
      name,
      required,
      touched,
    } = this.props

    const showError = error && touched

    const classes = cn({
      'mc-form-group': true,
      'mc-form-group--error': error,
    })

    return (
      <div className={classes}>
        <div className='row no-gutters justify-content-between align-items-end mc-mb-2'>
          <div className='col-auto'>
            {label &&
              <label
                htmlFor={name}
                className='d-block mc-text-h8'
              >
                {label}
              </label>
            }
          </div>

          {!required &&
            <div className='col-auto'>
              <p className='mc-text-x-small mc-text--muted'>
                (Optional)
              </p>
            </div>
          }
        </div>

        {children}

        {(help || counter) &&
          <div className='row no-gutters justify-content-between align-items-end mc-mb-2'>
            <div className='col-auto'>
              {help &&
                <span className='mc-text-x-small mc-text--muted'>
                  {help}
                </span>
              }
            </div>

            <div className='col-auto'>
              {showError &&
                <span className='mc-text-x-small mc-text--muted'>
                  {error}
                </span>
              }
            </div>

            <div className='col-auto'>
              { counter &&
                <span className='mc-form-counter'>
                  {counter}
                </span>
              }
            </div>
          </div>
        }

      </div>
    )
  }
}
