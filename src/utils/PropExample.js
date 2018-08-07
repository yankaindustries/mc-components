import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CodeExample from './CodeExample'


export default class Definition extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render () {
    const { name, type, children } = this.props

    return (
      <div className='example--definition'>
        <div className='row'>
          <div className='col-xs-10'>
            <p className='mc-body'>
              <span className='example--definition-name'>{name}</span>
              {type &&
                <span className='example--definition-type'>
                  &nbsp;&lt;{type}&gt;
                </span>
              }
            </p>
          </div>

          <div className='col-xs-2 text-right'>
          </div>
        </div>

        <CodeExample>
          {children}
        </CodeExample>
      </div>
    )
  }
}
