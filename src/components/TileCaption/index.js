import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileCaption extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
      subtitle,
      title,
    } = this.props

    const classes = [
      'mc-tile__component',
      'mc-tile-caption',
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        <div className='mc-tile-caption__titles'>
          <h2 className='mc-tile-caption__title'>{title}</h2>
          <h3 className='mc-tile-caption__subtitle'>{subtitle}</h3>
        </div>

        {children &&
          <div className='mc-tile-caption__content content'>
            {children}
          </div>
        }
      </div>
    )
  }
}
