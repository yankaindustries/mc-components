import React, { PureComponent } from 'react'
import cn from 'classnames'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import Placeholder from '../../utils/Placeholder'

import AnimationHandler from '../../components/AnimationHandler'
import Button from '../../components/Button'
import HoverHandler from '../../components/HoverHandler'
import Select from '../../components/Select'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'


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
  { value: SIZE_H1, label: 'H1' },
  { value: SIZE_H2, label: 'H2' },
  { value: SIZE_H3, label: 'H3' },
  { value: SIZE_H4, label: 'H4' },
  { value: SIZE_H5, label: 'H5' },
  { value: SIZE_H6, label: 'H6' },
  { value: SIZE_H7, label: 'H7' },
  { value: SIZE_H8, label: 'H8' },
  { value: SIZE_LARGE, label: 'Large' },
  { value: SIZE_NORMAL, label: 'Normal' },
  { value: SIZE_SMALL, label: 'Small' },
  { value: SIZE_XSMALL, label: 'Extra Small' },
]


class Summary extends PureComponent {
  state = {
    color: NONE,
    modifier: NONE,
    size: SIZE_H1,
  }

  toggle = (key, value) => () =>
    this.setState(state => ({
      [key]: state[key] === value ? NONE : value,
    }))

  setSize = size =>
    this.setState({ size })

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
        <DocHeader
          title='Typography'
          description='A showcase of the available type styles in mc-components.'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-2'>
              <Select
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
              <CodeExample>
                <div style={{ height: '200px', position: 'relative' }}>
                  <Placeholder>
                      <span className={`mc-text-${size} ${modifierClass}`}>
                        Test
                      </span>
                  </Placeholder>
                </div>
              </CodeExample>
            </div>
          </div>

          <div className='mc-mb-9'>
            <div className='row'>
              <div className='col-sm-6 offset-sm-1'>
                <h2 className='mc-text-h5 mc-text--muted mc-text--normal mc-text--airy mc-text--uppercase'>
                  Lorem Ipsum
                </h2>

                <h4 className='mc-text-h4 mc-mb-2'>
                  Clean &amp; Simple Title Text
                </h4>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-6 offset-sm-1'>
              <div className='mc-text--bare-link-parent mc-mb-9'>
                <h3 className='mc-text-h3 mc-text--uppercase mc-text--bare-link mc-mb-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mc-mb-2'>
                  Every great story is born
                  from <a className='mc-text--link'>intentions and
                  obstacles</a>. Learn how to build the &quot;drive shaft&quot;
                  that will set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mc-mb-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>

              <div className='mc-text--bare-link-parent mc-mb-9'>
                <h3 className='mc-text-h5 mc-text--bare-link mc-mb-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mc-mb-2'>
                  Every great story is born from intentions and obstacles.
                  Learn how to build the &quot;drive shaft&quot; that will
                  set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mc-mb-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>

              <div className='mc-text--bare-link-parent mc-mb-9'>
                <h3 className='mc-text-h5 mc-text--bare-link mc-mb-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mc-mb-2'>
                  Every great story is born from intentions and obstacles.
                  Learn how to build the &quot;drive shaft&quot; that will
                  set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mc-mb-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>
            </div>

            <div className='col-sm-4'>
              <div className='row mc-text--bare-link-parent'>
                <div className='col-auto'>
                  <h6 className='mc-text-h7 mc-text--muted'>
                    3
                  </h6>
                </div>

                <div className='col-10'>
                  <h6 className='mc-text-h7 mc-text--muted mc-text--uppercase mc-mb-2'>
                    Up Next
                  </h6>

                  <h6 className='mc-text-h6 mc-text--bare-link mc-mb-2'>
                    Mastering Ingredients: Vegetables &amp; Herbs
                  </h6>
                  <p className='mc-text-x-small mc-text--muted'>
                    Do ugly vegetables taste better? Which are the most
                    versatile herbs? Gordon shows you how to select great
                    produce to create phenomenal dishes.
                  </p>
                </div>
              </div>

              <hr />

              <div className='row mc-text--bare-link-parent'>
                <div className='col-auto'>
                  <h6 className='mc-text-h7 mc-text--muted'>
                    4
                  </h6>
                </div>

                <div className='col-10'>
                  <h6 className='mc-text-h6 mc-text--bare-link mc-mb-2'>
                    Mastering Ingredients: Vegetables &amp; Herbs
                  </h6>
                  <p className='mc-text-x-small mc-text--muted'>
                    Do ugly vegetables taste better? Which are the most
                    versatile herbs? Gordon shows you how to select great
                    produce to create phenomenal dishes.
                  </p>
                </div>
              </div>

              <hr />

              <div className='row mc-text--bare-link-parent'>
                <div className='col-auto'>
                  <p className='mc-text--muted'>
                    5
                  </p>
                </div>

                <div className='col-10'>
                  <h6 className='mc-text-h6 mc-text--bare-link mc-mb-2'>
                    Mastering Ingredients: Vegetables &amp; Herbs
                  </h6>
                  <p className='mc-text-x-small mc-text--muted'>
                    Do ugly vegetables taste better? Which are the most
                    versatile herbs? Gordon shows you how to select great
                    produce to create phenomenal dishes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className='row'>
            {[1, 2, 3].map(key =>
              <div key={key} className='col-sm-6 col-lg-4'>
                <HoverHandler>
                  {({ hovering }) =>
                    <AnimationHandler
                      type='zoom'
                      animating={hovering}
                    >
                      <div className='mc-text--bare-link-parent'>
                        <Tile>
                          <TileImage imageUrl='https://placekitten.com/800/800' />
                        </Tile>

                        <div className='mc-card mc-background mc-background--dark'>
                          <h6 className={`
                            mc-text-h7
                            mc-text--muted
                            mc-text--uppercase
                            mc-mb-2
                          `}>
                            Building Your Home Studio
                          </h6>

                          <h4 className='mc-text-h4 mc-text--bare-link mc-mb-2'>
                            Margaret Atwood
                          </h4>

                          <p className='mc-text--muted mc-mb-2'>
                            Mixtape tumblr chartreuse snackwave 8-bit
                            selfies, glossier mumblecore fingerstache church-key
                            kombucha. Hot chocolate.
                          </p>

                          <p className='mc-text-small mc-text--silenced'>
                            12 Lessons • Music
                          </p>
                        </div>
                      </div>
                    </AnimationHandler>
                  }
                </HoverHandler>
              </div>,
            )}
          </div>
        </DocSection>
      </div>
    )
  }
}

export default withAddons({
  path: 'foundation/typography/summary.stories.js',
})(() => <Summary />)
