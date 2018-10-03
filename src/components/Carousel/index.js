import React, { Children, Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'


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
    fadeEdges: PropTypes.bool,
    focusOnSelect: PropTypes.bool,
    sliderRef: PropTypes.func,
    loop: PropTypes.bool,
    scrollCount: PropTypes.number,
    showCount: PropTypes.number,
    transition: PropTypes.string,
    variableWidth: PropTypes.bool,
  }

  static defaultProps = {
    autoPlay: false,
    centered: false,
    controls: false,
    fadeEdges: false,
    focusOnSelect: false,
    loop: false,
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
      fadeEdges,
      loop,
      sliderRef,
      scrollCount,
      showCount,
      transition,
      ...restProps
    } = this.props

    const classes = [
      className,
      'mc-carousel',
      `mc-carousel--${transition}`,
      centered ? 'mc-carousel--centered' : '',
      fadeEdges ? 'mc-carousel--fade-edges' : '',
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
          centerMode={centered || fadeEdges}
          centerPadding={fadeEdges ? CENTERED_PADDING : 0}
          fade={transition === TRANSITION_FADE}
          ref={sliderRef}
          slidesToScroll={scrollCount}
          slidesToShow={showCount}
          infinite={loop}
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
