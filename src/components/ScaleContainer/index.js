import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ScaleContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    className: PropTypes.string,
    hoverClass: PropTypes.string,
    zoomClass: PropTypes.string,
    timeToScale: PropTypes.number,
    hoverClassDelay: PropTypes.number,
    onMouseEnter: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    hoverClass: '',
    zoomClass: '',
    timeToScale: 500,
    hoverClassDelay: 200,
    onMouseEnter: () => {},
  }

  state = {
    hoverClass: '',
    zoomClass: '',
    hoverTimer: undefined,
    zoomTimer: undefined,
    scale: 1,
    style: {},
  }

  constructor () {
    super()
    this.containerRef = React.createRef()
  }

  componentWillUnmount () {
    const { zoomTimer } = this.state
    clearTimeout(zoomTimer)
  }

  onMouseEnter = (e) => {
    e.preventDefault()
    const { timeToScale, hoverClassDelay, onMouseEnter } = this.props
    onMouseEnter()
    const { hoverTimer } = this.state
    clearTimeout(hoverTimer)
    setTimeout(this.addHoverClass, hoverClassDelay)
    const zoomTimer = setTimeout(this.addZoomClass, timeToScale)
    this.setState({ zoomTimer })
  }

  onMouseLeave = (e) => {
    e.preventDefault()
    const { timeToScale } = this.props
    const { zoomTimer } = this.state
    clearTimeout(zoomTimer)
    this.removeZoomClass()
    const hoverTimer = setTimeout(this.removeHoverClass, timeToScale)
    this.setState({ hoverTimer })
  }

  addHoverClass = () => {
    const { hoverClass } = this.props
    this.setState({ hoverClass })
  }

  removeHoverClass = () => {
    this.setState({ hoverClass: '' })
  }

  addZoomClass = () => {
    const containerWidth = this.containerRef.current.clientWidth
    const gridGutter = 30
    const tileZoom = containerWidth + (gridGutter * 2)
    // prevent window overflow
    const bodyWidth = document.getElementsByTagName('body')[0].clientWidth
    const scaledWidth = bodyWidth > tileZoom ? tileZoom : bodyWidth
    const scale = scaledWidth / containerWidth
    const { zoomClass } = this.props
    this.setState({
      zoomClass,
      scale,
      style: { transform: `scale(${scale})` },
    })
  }

  removeZoomClass = () => {
    this.setState({
      zoomClass: '',
      scale: 1,
      style: {},
    })
  }

  render () {
    const { className, children } = this.props
    const {
      hoverClass,
      zoomClass,
      style,
      scale,
    } = this.state
    const reverseScale = 1 / scale

    return (
      <div
        className={`${className} ${hoverClass} ${zoomClass}`}
        style={style}
        ref={this.containerRef}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children(Boolean(zoomClass), reverseScale)}
      </div>
    )
  }
}
