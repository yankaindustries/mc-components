import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { renderChildren } from '../../utils/helpers'

import ImageTile from '../ImageTile'
import ToggleHandler from '../ToggleHandler'

import Check from '../../assets/check-circle.svg'

export default class CheckTile extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    imageUrl: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    onChange: noop,
    checked: false,
    children: noop,
  }

  render () {
    const {
      onChange,
      checked,
      imageUrl,
      children,
    } = this.props

    const classNames = [
      'check-tile',
      checked ? 'check-tile--checked' : 'check-tile--unchecked',
    ].join(' ')

    return (
      <ToggleHandler
        toggled={checked}
        onChange={onChange}
      >
        {({ toggled }) =>
          <div className={classNames}>
            <img className='check-tile__check' src={toggled ? Check : null} />


            <ImageTile imageUrl={imageUrl}>
              {renderChildren(children, { checked: toggled })}
            </ImageTile>
          </div>
        }
      </ToggleHandler>
    )
  }
}
