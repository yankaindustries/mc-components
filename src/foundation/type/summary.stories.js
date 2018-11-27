import React, { PureComponent } from 'react'
import cn from 'classnames'

import CodeExample from '../../utils/CodeExample'

import Button from '../../components/Button'


const MODIFIER_NONE = 'MODIFIER_NONE'
const MODIFIER_AIRY = 'MODIFIER_AIRY'
const MODIFIER_UPPERCASE = 'MODIFIER_UPPERCASE'


export default class Summary extends PureComponent {
  state = {
    modifier: MODIFIER_NONE,
  }

  toggle = modifier => () => {
    this.setState(state => ({
      modifier: state.modifier === modifier ? MODIFIER_NONE : modifier,
    }))
  }

  render () {
    const {
      modifier,
    } = this.state

    const modifierClass = cn({
      'mc-text--airy': modifier === MODIFIER_AIRY,
      'mc-text--uppercase': modifier === MODIFIER_UPPERCASE,
    })

    // Add class on body
    const root = document.getElementsByTagName('html')[0]
    root.setAttribute('class', 'mc-beta')

    return (
      <div className='container'>
        <div className='example__heading'>
          <div className='row align-items-center'>
            <div className='col-sm-9'>
              <h2 className='mc-text-h1'>Typography</h2>
              <p className='mc-text--muted'>
                A showcase of the available type styles in mc-components.
              </p>
            </div>

            <div className='col-sm-3'>
              <div className='row'>
                <div className='col-auto'>
                  <Button
                    onClick={this.toggle(MODIFIER_UPPERCASE)}
                    secondary={modifier !== MODIFIER_UPPERCASE}
                  >
                    Uppercase
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    onClick={this.toggle(MODIFIER_AIRY)}
                    secondary={modifier !== MODIFIER_AIRY}
                  >
                    Airy
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
