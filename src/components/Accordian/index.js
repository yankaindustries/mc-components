import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import AnimationHandler from '../AnimationHandler'
import Button from '../Button'
import HoverHandler from '../HoverHandler'
import Tile from '../Tile'
import TileCaption from '../TileCaption'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'

import './styles.scss'


const tiles = [
  {
    image: 'http://stephenpontes.com/clients/mc/images/gr.png',
    instructor: 'Gordon Ramsay',
    course: 'Teaches Cooking 1',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/tk.png',
    instructor: 'Thomas Keller',
    course: 'Teaches Cooking Techniques II: Meats, Stocks, and Sauces',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/da.png',
    instructor: 'Dominique Ansel',
    course: 'Teaches French Pastry Fundamentals',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/dakr.jpg',
    instructor: 'David Axelrod and Karl Rove',
    course: 'Teaches Campaign Strategy and Messaging',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
]


export default class Accordian extends PureComponent {
  static propTypes = {
    // children: PropTypes.oneOfType([
    //   PropTypes.node,
    //   PropTypes.arrayOf(PropTypes.node),
    // ]),
    className: PropTypes.string,

  }

  render () {
    const {
      // children,
      className,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-accordian': true,
    })

    return (
      <div className={classes}>
        <HoverHandler nowrap>
          {({ intent: parentHovering, props }) =>
            <div className={classes} {...props}>
              {tiles.map((tile, key) =>
                <HoverHandler key={key} nowrap>
                  {({ intent: hovering, props: panelProps }) =>
                    <div
                      className={`mc-accordian__item ${hovering ? 'mc-accordian__item--active' : ''}`}
                      {...panelProps}
                    >
                      <Tile aspectRatio='auto'>
                        <TileImage imageUrl={tile.image} />

                        <AnimationHandler type='hide' animating={hovering}>
                          <TileOverlay type='gradient-bottom' />
                        </AnimationHandler>

                        <AnimationHandler type='delayed-hide' animating={parentHovering}>
                          <TileCaption position='center bottom'>
                            <h4 className='mc-text-h4'>
                              {tile.instructor}
                            </h4>
                            <p className='mc-text--muted'>
                              {tile.course}
                            </p>
                          </TileCaption>
                        </AnimationHandler>

                        <AnimationHandler type='show' animating={hovering}>
                          <TileOverlay type='gradient-left' />
                        </AnimationHandler>

                        <AnimationHandler type='delayed-show' animating={hovering}>
                          <TileCaption position='left center'>
                            <div className='row'>
                              <div className='col-4 offset-1'>
                                <h4 className='mc-text-h4'>
                                  {tile.instructor}
                                </h4>
                                <p className='mc-text--muted'>
                                  {tile.course}
                                </p>
                                <p className='mc-mb-4'>
                                  {tile.description}
                                </p>
                                <Button>Start Class</Button>
                              </div>
                            </div>
                          </TileCaption>
                        </AnimationHandler>
                      </Tile>
                    </div>
                  }
                </HoverHandler>,
              )}
            </div>
          }
        </HoverHandler>
      </div>
    )
  }
}
