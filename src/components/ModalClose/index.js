import React, { PureComponent } from 'react'

import { Consumer } from '../Modal'
import IconClose from '../Icons/Close'


export default class ModalClose extends PureComponent {
  render () {
    return (
      <Consumer>
        {({ close }) =>
          <div
            className='mc-modal__close'
            onClick={close('close')}
          >
            <IconClose />
          </div>
        }
      </Consumer>
    )
  }
}
