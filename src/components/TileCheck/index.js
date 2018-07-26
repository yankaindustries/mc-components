import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { renderChildren } from '../../utils/helpers'

import ToggleHandler from '../ToggleHandler'

import Check from '../../assets/check-circle.svg'

export default class TileCheck extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    onChange: noop,
  }

  render () {
    const {
      checked,
      children,
      onChange,
    } = this.props

    const classNames = toggled =>
      [
        'mc-tile-check',
        toggled ? 'mc-tile-check--checked' : 'mc-tile-check--unchecked',
      ].join(' ')

    return (
      <ToggleHandler
        toggled={checked}
        onChange={onChange}
      >
        {({ toggled, onClick }) =>
          <a className={classNames(checked)} onClick={onClick}>
            <img className='mc-tile-check__check' src={toggled ? Check : null} />
            {children &&
              <div className='mc-tile__content'>
                {renderChildren(children, { checked: toggled })}
              </div>
            }
          </a>
        }
      </ToggleHandler>
    )
  }
}
