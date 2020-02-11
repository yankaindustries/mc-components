import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import cn from 'classnames'

import FullscreenHandler from '../FullscreenHandler'
import { PROP_TYPE_CHILDREN } from '../constants'

const getOrCreateToaster = function (parentNode) {
  let toaster
  const existingToaster = document.querySelectorAll('.mc-toaster')
  if (existingToaster.length) {
    [toaster] = existingToaster
    const existingParent = toaster.parentNode
    if (existingParent !== parentNode) {
      existingParent.removeChild(toaster)
      parentNode.appendChild(toaster)
    }
  } else {
    toaster = document.createElement('div')
    toaster.className = 'mc-toaster'
    parentNode.appendChild(toaster)
  }

  return toaster
}

export default class Toast extends PureComponent {
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

  state = {
    show: false,
  }

  containerRef = React.createRef()

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

  componentDidUpdate (prevProps) {
    if (this.props.show && this.props.show !== prevProps.show) {
      this.show()
    }

    if (!this.props.show && this.props.show !== prevProps.show) {
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

  renderToast () {
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

    return (
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
      </CSSTransition>
    )
  }

  render () {
    return (
      <FullscreenHandler>
        {({ fullscreenElement }) => createPortal(
          this.renderToast(),
          getOrCreateToaster(fullscreenElement || document.body),
        )}
      </FullscreenHandler>
    )
  }
}
