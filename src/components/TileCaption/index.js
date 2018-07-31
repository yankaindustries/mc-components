import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileCaption extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    position: PropTypes.oneOf([
      'left bottom',
      'center bottom',
      'left below',
      'center below',
    ]),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    position: 'left bottom',
  }

  render () {
    const {
      children,
      className,
      position,
      subtitle,
      title,
    } = this.props

    const classes = [
      'mc-tile__component',
      'mc-tile-caption',
      `mc-tile-caption--${position.replace(' ', '-')}`,
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        <div className='mc-tile-caption__titles'>
          {title &&
            <h2 className='mc-tile-caption__title'>{title}</h2>
          }
          {subtitle &&
            <h3 className='mc-tile-caption__subtitle'>{subtitle}</h3>
          }
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
