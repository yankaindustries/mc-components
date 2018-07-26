import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Filler extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
  }

  render () {
    const { children } = this.props

    return (
      <div className='example-placeholder'>
        <div className='example-placeholder__inner'>
          {children}
        </div>
      </div>
    )
  }
}
