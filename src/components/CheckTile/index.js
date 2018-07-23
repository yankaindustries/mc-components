import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ImageTile from '../ImageTile'
import CheckOverlay from '../CheckOverlay'

export default class CheckTile extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    onCheck: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  render () {
    const {
      checked,
      children,
    } = this.props

    const classNames = [
      'overlay-check',
      checked ? 'overlay-check--checked' : 'overlay-check--unchecked',
    ].join(' ')

    return (
      <CheckOverlay {...this.props}>
        <ImageTile className={classNames} {...this.props}>
          {children}
        </ImageTile>
      </CheckOverlay>
    )
  }
}
