import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


// TODO JJ: figure out if this violates best practices
let toaster

const existingToaster = document.querySelectorAll('mc-toaster')
if (existingToaster.length) {
  [toaster] = existingToaster
} else {
  toaster = document.createElement('div')
  toaster.className = 'mc-toaster'
  document.body.appendChild(toaster)
}


export default class Button extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    kind: PropTypes.oneOf([
      'default',
      'success',
      'error',
    ]),
    show: PropTypes.bool,
  }

  static defaultProps = {
    kind: 'default',
  }

  containerRef = React.createRef()

  state = {
    show: false,
  }

  show = () => {
    this.setState({
      height: this.containerRef.current.offsetHeight,
      show: true,
    })
    this.timer = window.setTimeout(this.hide, 6000)
  }

  hide = () => {
    this.setState({ show: false })
  }

  componentDidMount () {
    if (this.props.show) {
      this.show()
    }

    if (this.containerRef.current) {
      this.setState({ height: this.containerRef.current.offsetHeight })
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.show && newProps.show !== this.props.show) {
      this.show()
    }

    if (!newProps.show && newProps.show !== this.props.show) {
      this.hide()
    }
  }

  endListener = (node, done) => {
    node.addEventListener('transitionend', done, false)
  }

  pauseHide = () => {
    window.clearTimeout(this.timer)
  }

  resumeHide = () => {
    if (this.state.show) {
      this.show()
    }
  }

  render () {
    const {
      children,
      className,
      kind,
    } = this.props

    const {
      height,
      show,
    } = this.state

    const classNames = cn({
      'mc-toast': true,
      'mc-toast--appear': show,
      [`mc-toast--${kind}`]: kind,
      [className]: className,
    })

    return createPortal(
      <CSSTransition
        addEndListener={this.endListener}
        classNames='mc-toast-'
        in={show}
      >
        <div
          className={classNames}
          onMouseOver={this.pauseHide}
          onMouseOut={this.resumeHide}
          style={{ height }}
        >
          <div className='mc-toast__container' ref={this.containerRef}>
            <div className='mc-toast__content'>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
      toaster,
    )
  }
}
