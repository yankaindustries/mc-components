import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class TileCaption extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    position: PropTypes.string,
    comingSoon: PropTypes.bool,
    animated: PropTypes.bool,
    style: PropTypes.object,
  }

  static defaultProps = {
    comingSoon: false,
    animated: false,
  }

  render () {
    const {
      title,
      subtitle,
      position,
      animated,
      style,
      comingSoon,
    } = this.props

    return (
      <div
        className={`
          tile-caption
          tile-caption--${position}
          ${animated ? 'tile-caption--animated' : ''}
        `}
        style={style}
      >
        <div className='tile-caption__container'>
          {comingSoon &&
          <p className='tile-caption__coming-soon'>Coming soon</p>
          }
          <h3 className='tile-caption__title'>{title}</h3>
          {subtitle &&
          <h4 className='tile-caption__subtitle'>{subtitle}</h4>
          }
        </div>
      </div>
    )
  }
}
