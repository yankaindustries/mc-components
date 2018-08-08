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

    const positionClasses =
      position.split(' ').map(pos => `mc-tile-caption--${pos}`)

    const classes = [
      'mc-tile__component',
      'mc-tile-caption',
      ...positionClasses,
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        <div className='mc-tile-caption__titles'>
          {title &&
            <h4 className='mc-tile-caption__title mc-text-h2 mc-text--uppercase'>
              {title}
            </h4>
          }
          {subtitle &&
            <h5 className='mc-tile-caption__subtitle mc-text-h4 mc-text--muted'>
              {subtitle}
            </h5>
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
