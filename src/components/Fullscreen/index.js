import React, { PureComponent } from 'react'
import { bool } from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'

const prefixedTypes = ['webkit', 'moz', 'ms']

const getBrowserType = function () {
  let browserType = 'standard'
  if (!document.fullscreenEnabled) {
    prefixedTypes.forEach((type) => {
      const isSupported = !!document[`${type}FullscreenEnabled`]
      if (isSupported) {
        browserType = type
      }
    })
  }

  return browserType
}

export default class Fullscreen extends PureComponent {
  static propTypes = {
    isFullscreen: bool.isRequired,
    children: PROP_TYPE_CHILDREN.isRequired,
  }

  state = {
    browserType: 'standard',
  }

  fullscreenElement = React.createRef()

  constructor (props) {
    super(props)

    this.state = {
      browserType: getBrowserType(),
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.isFullscreen !== this.props.isFullscreen) {
      if (this.props.isFullscreen) {
        this.enterFullscreen()
      } else {
        this.exitFullscreen()
      }
    }
  }

  enterFullscreen () {
    console.log('fullscreenElement: ', this.fullscreenElement)
    const { browserType } = this.state
    if (browserType === 'standard') {
      this.fullscreenElement.current.requestFullscreen()
    } else {
      const methodName = `${browserType}RequestFullscreen`
      this.fullscreenElement.current[methodName]()
    }
  }

  exitFullscreen () {
    const { browserType } = this.state
    if (browserType === 'standard') {
      document.exitFullscreen()
    } else if (browserType === 'moz') {
      document.mozCancelFullscreen()
    } else {
      document[`${browserType}ExitFullscreen`]()
    }
  }

  render () {
    const { children } = this.props

    return (
      <div className='mc-fullscreen' ref={this.fullscreenElement}>
        {children}
      </div>
    )
  }
}
