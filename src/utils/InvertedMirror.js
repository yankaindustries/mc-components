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
          <div className='col-md-6'>
            <Background
              color='dark'
              className='mc-card'
            >
              <h5 className='mc-text-h5 mc-mb-7 mc-text--center'>
                Dark Theme (default)
              </h5>
              {children}
            </Background>
          </div>

          <div className='col-md-6'>
            <Background
              color='light'
              className='mc-card mc-theme-light'
            >
              <h5 className='mc-text-h5 mc-mb-7 mc-text--center'>
                Light Theme
              </h5>
              {children}
            </Background>
          </div>
        </div>
      </div>
    )
  }
}
