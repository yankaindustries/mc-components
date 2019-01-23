import React, { PureComponent } from 'react'
import cn from 'classnames'

import CodeExample from '../../utils/CodeExample'

import Button from '../../components/Button'


const NONE = 'NONE'

const MODIFIER_AIRY = 'MODIFIER_AIRY'
const MODIFIER_UPPERCASE = 'MODIFIER_UPPERCASE'

const COLOR_HINTED = 'COLOR_HINTED'
const COLOR_MUTED = 'COLOR_MUTED'
const COLOR_SILENCED = 'COLOR_SILENCED'


export default class Summary extends PureComponent {
  state = {
    color: NONE,
    modifier: NONE,
  }

  toggle = (key, value) => () => {
    this.setState(state => ({
      [key]: state[key] === value ? NONE : value,
    }))
  }

  render () {
    const {
      modifier,
      color,
    } = this.state

    const modifierClass = cn({
      'mc-text--airy': modifier === MODIFIER_AIRY,
      'mc-text--uppercase': modifier === MODIFIER_UPPERCASE,
      'mc-text--hinted': color === COLOR_HINTED,
      'mc-text--muted': color === COLOR_MUTED,
      'mc-text--silenced': color === COLOR_SILENCED,
    })

    return (
      <div className='container'>
        <div className='example__heading'>
          <div className='row align-items-center'>
            <div className='col-12'>
              <h1 className='mc-text-h1'>
                Typography
              </h1>
              <p className='mc-text--muted'>
                A showcase of the available type styles in mc-components.
              </p>
            </div>

            <div className='col-12'>
              <div className='row'>
                <div className='col-auto'>
                  <Button
                    onClick={this.toggle('modifier', MODIFIER_UPPERCASE)}
                    secondary={modifier !== MODIFIER_UPPERCASE}
                  >
                    Uppercase
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    onClick={this.toggle('modifier', MODIFIER_AIRY)}
                    secondary={modifier !== MODIFIER_AIRY}
                  >
                    Airy
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    onClick={this.toggle('color', COLOR_HINTED)}
                    secondary={color !== COLOR_HINTED}
                  >
                    Hinted
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    onClick={this.toggle('color', COLOR_MUTED)}
                    secondary={color !== COLOR_MUTED}
                  >
                    Muted
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    onClick={this.toggle('color', COLOR_SILENCED)}
                    secondary={color !== COLOR_SILENCED}
                  >
                    Silenced
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='example__section'>
          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h1
          </div>
          <CodeExample>
            <h1 className={`mc-text-h1 ${modifierClass}`}>
              Gordon Ramsay
            </h1>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h2
          </div>
          <CodeExample>
            <h2 className={`mc-text-h2 ${modifierClass}`}>
              All-Access Pass
            </h2>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h3
          </div>
          <CodeExample>
            <h3 className={`mc-text-h3 ${modifierClass}`}>
              Now Available
            </h3>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h4
          </div>
          <CodeExample>
            <h4 className={`mc-text-h4 ${modifierClass}`}>
              Diane Von Furstenburg
            </h4>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h5
          </div>
          <CodeExample>
            <h5 className={`mc-text-h5 ${modifierClass}`}>
              Teaches Fashion
            </h5>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h6
          </div>
          <CodeExample>
            <h6 className={`mc-text-h6 ${modifierClass}`}>
              Account Settings
            </h6>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h7
          </div>
          <CodeExample>
            <h6 className={`mc-text-h7 ${modifierClass}`}>
              Account Settings
            </h6>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-h8
          </div>
          <CodeExample>
            <h6 className={`mc-text-h8 ${modifierClass}`}>
              Account Settings
            </h6>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-large
          </div>
          <CodeExample>
            <p className='mc-text-large'>
              Online classes taught by the world&#39;s greatest minds.<br />
              Now get unlimited access to all classes.
            </p>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            body
          </div>
          <CodeExample>
            <p>
              Online classes taught by the world&#39;s greatest minds.<br />
              Now get unlimited access to all classes.
            </p>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-small
          </div>
          <CodeExample>
            <p className='mc-text-small'>
              Online classes taught by the world&#39;s greatest minds.<br />
              Now get unlimited access to all classes.
            </p>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-x-small
          </div>
          <CodeExample>
            <p className='mc-text-x-small'>
              Online classes taught by the world&#39;s greatest minds.<br />
              Now get unlimited access to all classes.
            </p>
          </CodeExample>
        </div>
      </div>
    )
  }
}
