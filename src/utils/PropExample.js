import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import jsxToString from 'jsx-to-string'


const toString = node =>
  jsxToString(node, { shortBooleanSyntax: true })


export default class Definition extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  state = {
    showCode: false,
  }

  render () {
    const { name, type, children } = this.props

    const code = Array.isArray(children)
      ? children.map(toString).join('\n')
      : toString(children)

    return (
      <div className='example--definition'>
        <div className='row'>
          <div className='col-xs-10'>
            <h5>
              <span className='example--definition-name'>{name}</span>
              {type &&
                <span className='example--definition-type'>
                  &nbsp;&lt;{type}&gt;
                </span>
              }
            </h5>
          </div>

          <div className='col-xs-2 text-right'>
            <a
              onClick={() => {
                this.setState({ showCode: !this.state.showCode })
              }}
            >
              &lt;/&gt;
            </a>
          </div>
        </div>

        <div className='example--render'>
          {children}
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
