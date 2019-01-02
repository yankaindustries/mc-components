import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class DocHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render () {
    const {
      className,
      description,
      title,
    } = this.props

    const classes = cn({
      [className]: className,
      example__heading: true,
    })

    return (
      <div className={classes}>
        <div className='row'>
          <div className='col-lg-6'>
            <h1 className='mc-text-h1'>
              {title}
            </h1>

            <p className='mc-text-large mc-text--muted'>
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
