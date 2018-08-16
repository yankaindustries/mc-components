import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import PlayImage from '../Icons/PlayCircle'

export default class PlayButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    alt: PropTypes.string,
  }

  static defaultProps = {
    alt: 'Play',
  }

  onClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render () {
    const className = cn(
      'mc-play-button',
      { [this.props.className]: !!this.props.className },
    )

    return (
      <a className={className} onClick={this.onClick}>
        <PlayImage className='mc-play-button__image' alt={this.props.alt} />
      </a>
    )
  }
}
