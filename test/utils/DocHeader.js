import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Badge from '../components/Badge'


export default class DocHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    experimental: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }

  render () {
    const {
      className,
      description,
      experimental,
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
              {' '}
              {experimental &&
                <Badge>Experimental</Badge>
              }
            </h1>

            <p className='mc-text-large mc-opacity--muted'>
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
