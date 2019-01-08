import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class ImageTile extends PureComponent {
  static propTypes = {
    animationStyle: PropTypes.string,
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '9x16',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    className: PropTypes.string,
    children: PropTypes.node,
    imageUrl: PropTypes.string.isRequired,
    backgroundGradient: PropTypes.bool,
    width: PropTypes.number,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    className: '',
    backgroundGradient: true,
  }

  backgroundStyle = (imagePath) => {
    const { backgroundGradient } = this.props
    let backgroundImageStyle = `url('${imagePath}')`
    if (backgroundGradient) {
      backgroundImageStyle = `
        linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),
        ${backgroundImageStyle}
      `
    }
    return {
      backgroundImage: backgroundImageStyle,
    }
  }

  animationStyles = (style) => {
    switch (style) {
      case 'hover-zoom':
        return 'tile--hover-zoom'
      default:
        return 'tile--no-hover'
    }
  }

  render () {
    const {
      animationStyle,
      aspectRatio,
      className,
      children,
      imageUrl,
      width,
    } = this.props
    const classNames = cn(
      'tile',
      `tile--${aspectRatio}`,
      this.animationStyles(animationStyle),
      { [className]: Boolean(className) },
    )

    const style = width ? {
      width: `${width}px`,
      height: (() => {
        const aspectRatioArr = aspectRatio.split('x')
        const widthRatio = aspectRatioArr[0]
        const heigthRatio = aspectRatioArr[1]

        return (width * heigthRatio) / widthRatio
      })(),
    } : null

    return (
      <div
      className={classNames}
      style={style}
      >
        <div
          className={'background'}
          style={this.backgroundStyle(imageUrl)}
        />
        <div className={'content'}>{children}</div>
      </div>
    )
  }
}
