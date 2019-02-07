import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Background from '../components/Background'


export default class InvertedMirror extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
    } = this.props

    const classes = cn({
      [className]: className,
    })

    return (
      <div className={classes}>
        <div className='row'>
          <div className='col-lg-6'>
            <Background
              color='dark'
              className='mc-card'
            >
              {children}
            </Background>
          </div>

          <div className='col-lg-6'>
            <Background
              color='light'
              className='mc-card mc-invert'
            >
              {children}
            </Background>
          </div>
        </div>
      </div>
    )
  }
}
