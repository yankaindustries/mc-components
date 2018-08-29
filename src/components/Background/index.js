import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { renderChildren as renderProp } from '../helpers'


export default class Background extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    element: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
    fit: PropTypes.oneOf([
      'content',
      'background',
    ]),
    position: PropTypes.oneOf([
      'left top',
      'center top',
      'right top',
      'left center',
      'center center',
      'right center',
      'left bottom',
      'center bottom',
      'right bottom',
    ]),
    size: PropTypes.oneOf([
      'contain',
      'cover',
      'none',
    ]),
  }

  static defaultProps = {
    fit: 'content',
    position: 'center center',
    size: 'none',
  }

  state = {
    loaded: false,
  }

  constructor (props) {
    super(props)

    this.container = React.createRef()
    this.background = React.createRef()
  }

  setSizeBy = () => {
    // TODO see why sometimes the refs aren't populated, remove this check
    if (this.container.current && this.background.current) {
      const containerRatio =
        this.container.current.offsetWidth / this.container.current.offsetHeight
      const backgroundRatio =
        this.background.current.width / this.background.current.height
      const sizeBy = containerRatio > backgroundRatio ? 'width' : 'height'

      this.setState({ sizeBy })
    }
  }

  onLoad = () => {
    this.setSizeBy()
    this.setState({ loaded: true })
    window.addEventListener('resize', this.setSizeBy.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setSizeBy)
  }

  render () {
    const {
      children,
      className,
      element,
      fit,
      position,
      size,
    } = this.props

    const {
      loaded,
      sizeBy,
    } = this.state

    const [x, y] = position.split(' ')

    const classes = [
      'mc-background',
      loaded ? 'mc-background--loaded' : '',
      `mc-background--position-x-${x}`,
      `mc-background--position-y-${y}`,
      `mc-background--fit-${fit}`,
      `mc-background--size-${size}`,
      `mc-background--size-${size}-${sizeBy}`,
      className,
    ].join(' ')

    return (
      <div
        className={classes}
        ref={this.container}
      >
        <div className='mc-background__background-container'>
          {renderProp(element, {
            className: 'mc-background__background',
            ref: this.background,
            onLoad: this.onLoad,
          })}
        </div>
        <div className='mc-background__content-container'>
          <div className='mc-background__content'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
