import React, { PureComponent } from 'react'
import { bool } from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'

const STATE_BROWSER_TYPES = ['webkit', 'moz', 'ms']
const STATE_BROWSER_TYPE_DEFAULT = 'standard'

const getBrowserType = function () {
  let browserType = STATE_BROWSER_TYPE_DEFAULT
  if (!document.fullscreenEnabled) {
    STATE_BROWSER_TYPES.forEach((type) => {
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
    browserType: STATE_BROWSER_TYPE_DEFAULT,
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
    const { browserType } = this.state
    if (browserType === STATE_BROWSER_TYPE_DEFAULT) {
      this.fullscreenElement.current.requestFullscreen()
    } else {
      const methodName = `${browserType}RequestFullscreen`
      this.fullscreenElement.current[methodName]()
    }
  }

  exitFullscreen () {
    const { browserType } = this.state
    if (browserType === STATE_BROWSER_TYPE_DEFAULT) {
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
