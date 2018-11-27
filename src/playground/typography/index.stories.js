import React from 'react'
import { storiesOf } from '@storybook/react'

import AnimationHandler from '../../components/AnimationHandler'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'
import HoverHandler from '../../components/HoverHandler'


storiesOf('playground|Typography', module)
  .add('Examples', () =>
    <div className='container'>
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
                <h6 className='mc-text-h7 mc-text--muted'>
                  3
                </h6>
              </div>

              <div className='col-10'>
                <h6 className='mc-text-h7 mc-text--muted mc-text--uppercase mcb-space-2'>
                  Up Next
                </h6>

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

            <hr />

            <div className='row'>
              <div className='col-auto'>
                <h6 className='mc-text-h7 mc-text--muted'>
                  4
                </h6>
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
    </div>,
  )
