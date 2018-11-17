import React, { PureComponent } from 'react'
import cn from 'classnames'

import CodeExample from '../../utils/CodeExample'

import Button from '../../components/Button'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'
import AnimationHandler from '../../components/AnimationHandler'
import HoverHandler from '../../components/HoverHandler'


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
            .mc-text-d1
          </div>
          <CodeExample>
            <h1 className={`mc-text-d1 ${modifierClass}`}>
              Unlock Every Class
            </h1>
          </CodeExample>

          <div className='mc-text--muted mc-text--monospace'>
            .mc-text-d2
          </div>
          <CodeExample>
            <h2 className={`mc-text-d2 ${modifierClass}`}>
              All-Access Pass
            </h2>
          </CodeExample>

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

          {/* <div className='col-2 mc-text--right mc-text--muted'>
            h8
          </div>
          <div className='col-10'>
            <CodeExample>
              <h6 className={`mc-text-h8 ${modifierClass}`}>
                Account Settings
              </h6>
            </CodeExample>
          </div> */}

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

          {/* <div className='col-2 mc-text--right mc-text--muted'>
            x-small
          </div>
          <div className='col-10'>
            <CodeExample>
              <p className='mc-text-x-small'>
                Online classes taught by the world&#39;s greatest minds.<br />
                Now get unlimited access to all classes.
              </p>
            </CodeExample>
          </div> */}
        </div>

        <div className='example__section'>
          <div className='mcb-space-9'>
            <div className='row'>
              <div className='col-sm-6 offset-sm-1'>
                <h2 className='mc-text-h5 mc-text--muted mc-text--normal mc-text--airy mc-text--uppercase'>
                  Lorem Ipsum
                </h2>

                <h4 className='mc-text-h4 mcb-space-2'>
                  Clean &amp; Simple Title Text
                </h4>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-6 offset-sm-1'>
              <div className='mcb-space-9'>
                <h3 className='mc-text-h3 mc-text--uppercase mcb-space-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mcb-space-2'>
                  Every great story is born from intentions and obstacles.
                  Learn how to build the &quot;drive shaft&quot; that will
                  set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>

              <div className='mcb-space-9'>
                <h3 className='mc-text-h5 mcb-space-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mcb-space-2'>
                  Every great story is born from intentions and obstacles.
                  Learn how to build the &quot;drive shaft&quot; that will
                  set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>

              <div className='mcb-space-9'>
                <h3 className='mc-text-h5 mcb-space-2'>
                  Group Workshop: From Here To Alli By Corey Wright
                </h3>
                <p className='mc-text--muted mcb-space-2'>
                  Every great story is born from intentions and obstacles.
                  Learn how to build the &quot;drive shaft&quot; that will
                  set your script in motion.
                </p>
                <h6 className='mc-text-small mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                  Lesson 16 // 5min 40s
                </h6>
              </div>
            </div>

            <div className='col-sm-4'>
              <div className='row'>
                <div className='col-auto'>
                  <p className='mc-text--muted'>
                    3
                  </p>
                </div>

                <div className='col-10'>
                  <h3 className='mc-text-h7 mc-text--muted mc-text--uppercase mcb-space-2'>
                    Up Next
                  </h3>

                  <h6 className='mc-text-h6 mcb-space-2'>
                    Mastering Ingredients: Vegetables &amp; Herbs
                  </h6>
                  <p className='mc-text-small mc-text--muted'>
                    Do ugly vegetables taste better? Which are the most
                    versatile herbs? Gordon shows you how to select great
                    produce to create phenomenal dishes.
                  </p>
                </div>
              </div>

              <hr />

              <div className='row'>
                <div className='col-auto'>
                  <p className='mc-text--muted'>
                    4
                  </p>
                </div>

                <div className='col-10'>
                  <h6 className='mc-text-h6 mcb-space-2'>
                    Mastering Ingredients: Vegetables &amp; Herbs
                  </h6>
                  <p className='mc-text-small mc-text--muted'>
                    Do ugly vegetables taste better? Which are the most
                    versatile herbs? Gordon shows you how to select great
                    produce to create phenomenal dishes.
                  </p>
                </div>
              </div>

              <hr />

              <div className='row'>
                <div className='col-auto'>
                  <p className='mc-text--muted'>
                    5
                  </p>
                </div>

                <div className='col-10'>
                  <h6 className='mc-text-h6 mcb-space-2'>
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
                      <div>
                        <Tile>
                          <TileImage imageUrl='https://placekitten.com/800/800' />
                        </Tile>

                        <div className='mc-card mc-background mc-background--dark'>
                          <h6 className='mc-text-h7 mc-text--muted mc-text--uppercase mcb-space-2'>
                            Building Your Home Studio
                          </h6>

                          <h4 className='mc-text-h4 mcb-space-2'>
                            Margaret Atwood
                          </h4>

                          <p className='mc-text--muted mcb-space-2'>
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
        </div>
      </div>
    )
  }
}
