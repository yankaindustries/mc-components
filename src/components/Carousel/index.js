import React, { Children, Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import ChevronLeft from '../../assets/icons/chevron-left.svg'
import ChevronRight from '../../assets/icons/chevron-right.svg'


const TRANSITION_FADE = 'fade'
const TRANSITION_SLIDE = 'slide'
const CENTERED_PADDING = '200px'


class Arrow extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    onClick: PropTypes.func,
  }

  render () {
    const {
      children,
      className,
      direction,
      onClick,
    } = this.props

    const classes = [
      className,
      'mc-carousel__arrow',
      `mc-carousel__arrow--${direction}`,
    ].join(' ')

    return (
      <a
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
}


class Slide extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
  }

  render () {
    const {
      children,
    } = this.props


    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
}


export default class Carousel extends PureComponent {
  static propTypes = {
    autoPlay: PropTypes.bool,
    centered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    controls: PropTypes.bool,
    dots: PropTypes.bool,
    fadeOut: PropTypes.bool,
    focusOnSelect: PropTypes.bool,
    infinite: PropTypes.bool,
    scrollCount: PropTypes.number,
    showCount: PropTypes.number,
    transition: PropTypes.string,
    variableWidth: PropTypes.bool,
  }

  static defaultProps = {
    autoPlay: false,
    centered: false,
    controls: false,
    dots: false,
    fadeOut: false,
    focusOnSelect: false,
    infinite: false,
    scrollCount: 1,
    showCount: 3,
    transition: TRANSITION_SLIDE,
    variableWidth: false,
  }

  render () {
    const {
      autoPlay,
      children,
      className,
      centered,
      controls,
      fadeOut,
      scrollCount,
      showCount,
      transition,
      ...restProps
    } = this.props

    const classes = [
      className,
      'mc-carousel',
      centered && fadeOut ? 'mc-carousel--fade-out' : '',
    ].join(' ')

    const arrows = controls
      ? {
        arrows: true,
        prevArrow: (
          <Arrow direction='left'>
            <ChevronLeft />
          </Arrow>
        ),
        nextArrow: (
          <Arrow direction='right'>
            <ChevronRight />
          </Arrow>
        ),
      }
      : {
        arrows: false,
      }

    return (
      <div className='mc-carousel__container'>
        <Slider
          autoplay={autoPlay}
          className={classes}
          centerMode={centered}
          centerPadding={fadeOut ? CENTERED_PADDING : 0}
          fade={transition === TRANSITION_FADE}
          slidesToScroll={scrollCount}
          slidesToShow={showCount}
          {...arrows}
          {...restProps}
        >
          {Children.map(children, child => (
            <Slide>{child}</Slide>
          ))}
        </Slider>
      </div>
    )
  }
}
