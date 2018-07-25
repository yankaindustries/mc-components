import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { renderChildren } from '../../utils/helpers'

import ToggleHandler from '../ToggleHandler'

import Check from '../../assets/check-circle.svg'

export default class CheckTile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    checked: false,
    onChange: noop,
  }

  render () {
    const {
      aspectRatio,
      checked,
      children,
      onChange,
    } = this.props

    const classNames = [
      'mc-tile',
      `mc-tile--${aspectRatio}`,
      'mc-check-tile',
      checked ? 'mc-check-tile--checked' : 'mc-check-tile--unchecked',
    ].join(' ')

    return (
      <ToggleHandler
        toggled={checked}
        onChange={onChange}
      >
        {({ toggled }) =>
          <div className={classNames}>
            <img className='mc-check-tile__check' src={toggled ? Check : null} />
            {children &&
              <div className='content'>
                {renderChildren(children, { checked: toggled })}
              </div>
            }
          </div>
        }
      </ToggleHandler>
    )
  }
}
