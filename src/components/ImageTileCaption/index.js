import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class ImageTileCaption extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    position: PropTypes.oneOf(['above', 'below']),
    children: PropTypes.node,
  }

  static defaultProps = {
    position: 'above',
  }

  render () {
    const {
      title,
      subtitle,
      position,
      children,
    } = this.props

    const classNames = [
      'tile__caption',
      `imate-tile__caption--${position}`,
    ].join(' ')

    return (
      <div className={classNames}>
        <h2 className='tile__caption__title'>{title}</h2>
        <h3 className='tile__caption__subtitle'>{subtitle}</h3>
        {children}
      </div>
    )
  }
}
