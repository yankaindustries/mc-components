import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CheckImage from '../../assets/play-with-circle.svg'

export default class CheckboxOverlay extends PureComponent {
  static propTypes = {
    onCheck: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  render () {
    const {
      onCheck,
      children,
    } = this.props

    return (
      <a className='overlay-check__checkbox-tile-overlay' onClick={onCheck}>
        {children}
        <img className='overlay-check__image' src={CheckImage} alt='checkmark' />
      </a>
    )
  }
}
