import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CodeExample from './CodeExample'


export default class Definition extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  render () {
    const {
      children,
      description,
      name,
      type,
    } = this.props

    return (
      <div className='example__definition'>
        <p className='example__definition-name mc-text--bold'>
          {name}
        </p>
        {' '}

        {type &&
          <p className='example__definition-type mc-text--monospace mc-text--nowrap'>
            &lt;{type}&gt;
          </p>
        }

        {description &&
          <p className='example__definition-description mc-text--muted'>
            {description}
          </p>
        }

        <CodeExample>
          {children}
        </CodeExample>
      </div>
    )
  }
}
