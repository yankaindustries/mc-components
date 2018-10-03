import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Placeholder extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
    } = this.props

    const classes = [
      className,
      'example-placeholder',
    ].join(' ')

    return (
      <div className={classes}>
        <div className='example-placeholder__inner'>
          {children}
        </div>
      </div>
    )
  }
}
