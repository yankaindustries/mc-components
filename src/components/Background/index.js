import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { renderChildren as renderProp } from '../helpers'


export default class Background extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    color: PropTypes.oneOf([
      'dark',
      'medium',
      'light',
      'transparent',
    ]),
    element: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    fit: PropTypes.oneOf([
      'background',
      'container',
      'content',
    ]),
    position: PropTypes.oneOf([
      'center bottom',
      'center center',
      'center top',
      'left bottom',
      'left center',
      'left top',
      'right bottom',
      'right center',
      'right top',
    ]),
    size: PropTypes.oneOf([
      'auto',
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

  constructor (props) {
    super(props)

    this.container = React.createRef()
    this.background = React.createRef()
  }

  state = {
    loaded: false,
  }

  componentWillUnmount () {
    if (this.props.element) {
      window.removeEventListener('resize', this.setSizeBy)
    }
  }

  onLoad = () => {
    this.setSizeBy()
    this.setState({ loaded: true })
    window.addEventListener('resize', this.setSizeBy.bind(this))
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

  render () {
    const {
      children,
      className,
      color,
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

    const classes = cn({
      [className]: className,
      'mc-background': true,
      [`mc-background--color-${color}`]: color,
      'mc-background--loaded': loaded,
      [`mc-background--position-x-${x}`]: element,
      [`mc-background--position-y-${y}`]: element,
      [`mc-background--fit-${fit}`]: element,
      [`mc-background--size-${size}`]: element,
      [`mc-background--size-${size}-${sizeBy}`]: element,
    })

    return (
      <div
        className={classes}
        ref={this.container}
      >
        <div className='mc-background__background-container'>
          {element && renderProp(element, {
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
