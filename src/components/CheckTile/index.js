import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { renderChildren } from '../../utils/helpers'

import ImageTile from '../ImageTile'
import ToggleHandler from '../ToggleHandler'

export default class CheckTile extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    imageUrl: PropTypes.string.isRequired,
    children: PropTypes.element,
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
            <h3 className='check-tile__check'>
              {toggled ? '√' : 'o'}
            </h3>

            <ImageTile imageUrl={imageUrl}>
              {renderChildren(children, { checked: toggled })}
            </ImageTile>
          </div>
        }
      </ToggleHandler>
    )
  }
}
