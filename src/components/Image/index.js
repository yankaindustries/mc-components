import React from 'react'
import { number, string, oneOf, oneOfType } from 'prop-types'
import cn from 'classnames'
import { debounce } from 'lodash'
import resizeImage from './resize-image'
import { ASPECT_RATIOS } from '../helpers'

export default class Image extends React.PureComponent {
  static defaultProps = {
    scrollOffset: 100,
    resizeOffset: 100,
    resizeRound: 50,
  }

  static propTypes = {
    src: string.isRequired,
    aspectRatio: oneOf(ASPECT_RATIOS),
    height: oneOfType([string, number]),
    width: oneOfType([string, number]),
    className: string,
    scrollOffset: number,
    resizeOffset: number,
    resizeRound: number,
  }

  state = { calcWidth: null, calcHeight: null }

  wrapperRef = React.createRef()

  componentDidMount () {
    const { clientWidth, clientHeight } = this.wrapperRef.current
    this.setSize(clientWidth, clientHeight)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = debounce(() => {
    const { clientWidth, clientHeight } = this.wrapperRef.current
    const { resizeOffset } = this.props
    const resizedWidthDiff = Math.abs(clientWidth - this.state.calcWidth)
    if (resizedWidthDiff >= resizeOffset) {
      this.setSize(clientWidth, clientHeight)
    }
  }, 1000)

  round = (width) => {
    const { resizeRound } = this.props
    const rounded = Math.ceil(width / resizeRound) * resizeRound
    return Math.floor(rounded)
  }

  setSize = (width, height) => {
    const ratio = width / height
    const roundedWidth = this.round(width)
    this.setState({
      calcWidth: roundedWidth,
      calcHeight: Math.round(roundedWidth / ratio),
    })
  }

  render () {
    const {
      src,
      scrollOffset,
      resizeOffset,
      resizeRound,
      aspectRatio,
      className,
      width,
      height,
      ...rest
    } = this.props
    const { calcWidth, calcHeight } = this.state
    const resizedSrc = resizeImage(src, {
      width: calcWidth,
      height: calcHeight,
      fit: 'cover',
      dpr: 2,
    })

    return (
      <div
        ref={this.wrapperRef}
        style={{ width, height }}
        className={cn(
          className,
          'mc-img-wrapper',
          {
            [`mc-tile--${aspectRatio}`]: !!aspectRatio,
          },
        )}
      >
        {!!calcWidth && (
          <img className='mc-img-wrapper__image' src={resizedSrc} {...rest} />
        )}
      </div>
    )
  }
}
