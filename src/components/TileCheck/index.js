import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import ToggleHandler from '../ToggleHandler'
import Check from '../Icons/CheckCircle'
import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren } from '../helpers'


export default class TileCheck extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PROP_TYPE_CHILDREN,
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
        'mc-tile__component',
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
            {toggled && <Check className='mc-tile-check__check' />}
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
