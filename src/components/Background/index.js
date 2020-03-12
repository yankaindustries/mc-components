import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren as renderProp } from '../helpers'


export default class Background extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    color: PropTypes.oneOf([
      'dark',
      'medium',
      'light',
      'transparent',
      'dim',
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

  onLoad = () => {
    this.setState({ loaded: true })
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
    } = this.state

    const [x, y] = position.split(' ')

    const classes = cn({
      [className]: className,
      'mc-background': true,
      [`mc-background--color-${color}`]: color,
      'mc-background--loaded': loaded,
      [`mc-background--fit-${fit}`]: fit,
      [`mc-background--position-x-${x}`]: element,
      [`mc-background--position-y-${y}`]: element,
      [`mc-background--size-${size}`]: element,
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
            style: {
              objectFit: size,
              objectPosition: position,
            },
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
