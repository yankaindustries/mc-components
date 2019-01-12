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
      <div className='example__section'>
        <h4 className='mc-text-h4 mc-mb-2'>{title}</h4>
        {children}
      </div>
    )
  }
}
