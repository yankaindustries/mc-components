import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import cn from 'classnames'

import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'


const TRANSITION_FADE = 'fade'
const TRANSITION_SLIDE = 'slide'


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
        <span className='mc-carousel__arrow-text'>
          {children}
        </span>
      </a>
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
    focusOnSelect: PropTypes.bool,
    highlightOnActive: PropTypes.bool,
    highlightOnHover: PropTypes.bool,
    loop: PropTypes.bool,
    overflow: PropTypes.bool,
    peek: PropTypes.bool,
    scrollCount: PropTypes.number,
    showCount: PropTypes.number,
    sliderRef: PropTypes.func,
    transition: PropTypes.string,
  }

  static defaultProps = {
    autoPlay: false,
    centered: false,
    controls: false,
    focusOnSelect: false,
    highlightOnActive: false,
    highlightOnHover: false,
    loop: false,
    overflow: false,
    scrollCount: 1,
    showCount: 3,
    transition: TRANSITION_SLIDE,
  }

  render () {
    const {
      autoPlay,
      centered,
      children,
      className,
      controls,
      highlightOnActive,
      highlightOnHover,
      loop,
      overflow,
      peek,
      scrollCount,
      showCount,
      sliderRef,
      transition,
      ...restProps
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-carousel': true,
      'mc-carousel--centered': centered,
      'mc-carousel--highlight-active': highlightOnActive,
      'mc-carousel--highlight-hover': highlightOnHover,
      'mc-carousel--overflow': overflow || peek,
      'mc-carousel--peek': peek,
    })

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
      <Fragment>
        <div className='mc-carousel__forced-spacing' />
        <div className='mc-carousel__container'>
          <Slider
            autoplay={autoPlay}
            className={classes}
            centerMode={centered}
            centerPadding={0}
            fade={transition === TRANSITION_FADE}
            ref={sliderRef}
            slidesToScroll={scrollCount}
            slidesToShow={showCount}
            infinite={loop}
            draggable={false}
            {...arrows}
            {...restProps}
          >
            {children}
          </Slider>
        </div>
        <div className='mc-carousel__forced-spacing' />
      </Fragment>
    )
  }
}
