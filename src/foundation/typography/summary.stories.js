import React, { PureComponent } from 'react'
import cn from 'classnames'

import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import Placeholder from '../../utils/Placeholder'

import Input from '../../components/Input'
import Button from '../../components/Button'


const NONE = 'NONE'

const MODIFIER_AIRY = 'MODIFIER_AIRY'
const MODIFIER_UPPERCASE = 'MODIFIER_UPPERCASE'

const COLOR_HINTED = 'COLOR_HINTED'
const COLOR_MUTED = 'COLOR_MUTED'
const COLOR_SILENCED = 'COLOR_SILENCED'

const SIZE_H1 = 'h1'
const SIZE_H2 = 'h2'
const SIZE_H3 = 'h3'
const SIZE_H4 = 'h4'
const SIZE_H5 = 'h5'
const SIZE_H6 = 'h6'
const SIZE_H7 = 'h7'
const SIZE_H8 = 'h8'
const SIZE_LARGE = 'large'
const SIZE_NORMAL = 'normal'
const SIZE_SMALL = 'small'
const SIZE_XSMALL = 'x-small'

const sizeOptions = [
  { value: SIZE_H1, label: 'H1', },
  { value: SIZE_H2, label: 'H2', },
  { value: SIZE_H3, label: 'H3', },
  { value: SIZE_H4, label: 'H4', },
  { value: SIZE_H5, label: 'H5', },
  { value: SIZE_H6, label: 'H6', },
  { value: SIZE_H7, label: 'H7', },
  { value: SIZE_H8, label: 'H8', },
  { value: SIZE_LARGE, label: 'Large', },
  { value: SIZE_NORMAL, label: 'Normal', },
  { value: SIZE_SMALL, label: 'Small', },
  { value: SIZE_XSMALL, label: 'Extra Small', },
]


export default class Summary extends PureComponent {
  state = {
    color: NONE,
    modifier: NONE,
    size: SIZE_H1,
  }

  toggle = (key, value) => () =>
    this.setState(state => ({
      [key]: state[key] === value ? NONE : value,
    }))

  setSize = ({ target: { value }}) =>
    this.setState({ size: value })

  render () {
    const {
      modifier,
      color,
      size,
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
              <DocSection title='Demo'>
                <div className='row'>
                  <div className='col-auto'>
                    <Input
                      options={sizeOptions}
                      value={size}
                      onChange={this.setSize}
                    />
                  </div>

                  <div className='col-auto'>
                    <Button
                      onClick={this.toggle('modifier', MODIFIER_UPPERCASE)}
                      secondary={modifier !== MODIFIER_UPPERCASE}
                    >
                      Uppercase
                    </Button>

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

                    <Button
                      onClick={this.toggle('color', COLOR_MUTED)}
                      secondary={color !== COLOR_MUTED}
                    >
                      Muted
                    </Button>

                    <Button
                      onClick={this.toggle('color', COLOR_SILENCED)}
                      secondary={color !== COLOR_SILENCED}
                    >
                      Silenced
                    </Button>
                  </div>

                  <div className='col-12'>
                    <div style={{ height: '200px', position: 'relative' }}>
                      <Placeholder>
                        <span className={`mc-text-${size} ${modifierClass}`}>
                          Test
                        </span>
                      </Placeholder>
                    </div>
                  </div>
                </div>
              </DocSection>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
