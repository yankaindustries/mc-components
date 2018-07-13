import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Section extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render () {
    const { title, children } = this.props

    return (
      <div className='example--section'>
        <h4>{title}</h4>
        {children}
      </div>
    )
  }
}
