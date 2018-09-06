import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import jsxToString from 'jsx-to-string'


const toString = node =>
  jsxToString(node, { shortBooleanSyntax: true })


export default class CodeExample extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    showCode: false,
  }

  toggleCode = () => {
    this.setState({ showCode: !this.state.showCode })
  }

  render () {
    const { children } = this.props

    const code = Array.isArray(children)
      ? children.map(toString).join('\n')
      : toString(children)

    return (
      <div>
        <div className='example--render'>
          {children}
        </div>

        <div className='mc-text--monospace mc-text--right'>
          <a onClick={this.toggleCode}>
            &lt;/&gt;
          </a>
        </div>

        {this.state.showCode && (
          <Highlight language='html'>
            {code}
          </Highlight>
        )}
      </div>
    )
  }
}
