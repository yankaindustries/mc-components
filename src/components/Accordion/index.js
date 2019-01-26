import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isArray, isFunction } from 'lodash'
import cn from 'classnames'

import HoverHandler from '../HoverHandler'

import {
  renderChildren,
  ASPECT_RATIOS,
} from '../helpers'


export default class Accordion extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf(ASPECT_RATIOS),
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.arrayOf(PropTypes.func),
    ]),
    className: PropTypes.string,
    on: PropTypes.oneOf([
      'hovering',
      'intent',
    ]),
  }

  static defaultProps = {
    aspectRatio: '21x9',
    on: 'intent',
  }

  mapChildren = (children, mapFn) => {
    if (isArray(children) && isFunction(children[0])) {
      return children.map(mapFn)
    }

    return Children.map(children, mapFn)
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
      on,
      ...restProps
    } = this.props

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

    return (
      <HoverHandler nowrap>
        {({ [on]: parentActive, props: parentProps }) =>
          <div
            className={parentClasses(parentActive)}
            {...restProps}
            {...parentProps}
          >
            <div className='mc-accordion__content'>
              {this.mapChildren(children, child =>
                <HoverHandler nowrap>
                  {({ [on]: itemActive, props: itemProps }) =>
                    <div className={itemClasses(itemActive)} {...itemProps}>
                      {renderChildren(child, { itemActive, parentActive })}
                    </div>
                  }
                </HoverHandler>,
              )}
            </div>
          </div>
        }
      </HoverHandler>
    )
  }
}
