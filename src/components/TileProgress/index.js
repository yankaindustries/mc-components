import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class TileCaption extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
  }

  static defaultProps = {
    value: 0,
  }

  render () {
    const {
      className,
      value,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-tile__component': true,
      'mc-tile-progress': true,
    })

    return (
      <div className={classes}>
        <div className='mc-tile-progress__content'>
          <div
            className='mc-tile-progress__bar'
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    )
  }
}
