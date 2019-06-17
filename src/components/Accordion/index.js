import React, { Children, Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isArray, isFunction, times } from 'lodash'
import cn from 'classnames'

import HoverHandler from '../HoverHandler'

import { PROP_TYPE_CHILDREN } from '../constants'
import {
  renderChildren,
  ASPECT_RATIOS,
} from '../helpers'


export default class Accordion extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf(ASPECT_RATIOS),
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    on: PropTypes.oneOf([
      'hovering',
      'intent',
    ]),
    showCount: PropTypes.number,
  }

  static defaultProps = {
    aspectRatio: '21x9',
    on: 'hovering',
    showCount: 4,
  }

  state = {
    intent: false,
    hovering: false,
  }

  mapChildren = (children, mapFn) => {
    if (isArray(children) && isFunction(children[0])) {
      return children.map(mapFn)
    }

    return Children.map(children, mapFn)
  }

  handleHoverChange = (args) => {
    const { on } = this.props
    const value = args[on]

    if (typeof value === 'undefined') return

    this.setState({
      [on]: value,
    })
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
      on,
      showCount,
      ...restProps
    } = this.props

    const {
      [on]: parentActive,
    } = this.state

    const parentClasses = active =>
      cn({
        [className]: className,
        'mc-accordion': true,
        'mc-accordion--active': active,
        [`mc-accordion--${aspectRatio}`]: aspectRatio,
      })

    const itemClasses = active =>
      cn({
        'mc-accordion__item': true,
        'mc-accordion__item--active': active,
      })

    const countedChildren = times(showCount).map((v, i) => children[i])

    return (
      <div className={parentClasses(parentActive)} {...restProps}>
        <div className='mc-accordion__content'>
          {this.mapChildren(countedChildren, (child, key) =>
            <Fragment key={key}>
              {child &&
                <HoverHandler
                  onChange={this.handleHoverChange}
                  nowrap
                >
                  {({ [on]: itemActive, props: itemProps }) =>
                    <div className={itemClasses(itemActive)} {...itemProps}>
                      {renderChildren(child, { itemActive, parentActive })}
                    </div>
                  }
                </HoverHandler>
              }

              {!child &&
                <div className={itemClasses()} />
              }
            </Fragment>,
          )}
        </div>
      </div>
    )
  }
}
