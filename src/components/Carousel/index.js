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
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
    onPress: PropTypes.func,
  }

  render () {
    const {
      children,
      className,
      direction,
      onPress,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-carousel__arrow': true,
      [`mc-carousel__arrow--${direction}`]: direction,
    })

    return (
      <a
        className={classes}
        onClick={onPress}
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
    scrollCount: 2,
    showCount: 3,
    transition: TRANSITION_SLIDE,
  }

  constructor (props) {
    super(props)

    this.slider = props.sliderRef || React.createRef()
    this.state = {
      currentSlide: props.initialSlide || 0,
    }
  }

  handlePrevClick = () => {
    const { scrollCount } = this.props
    const { currentSlide } = this.state

    const targetSlide = currentSlide - scrollCount < 0
      ? 0
      : currentSlide - scrollCount

    this.slider.current.slickGoTo(targetSlide)
  }

  handleNextClick = () => {
    const { children, scrollCount, showCount } = this.props
    const { currentSlide } = this.state

    const targetSlide =
      currentSlide + showCount + scrollCount > children.length - 1
        ? children.length - showCount
        : currentSlide + scrollCount

    this.slider.current.slickGoTo(targetSlide)
  }

  handleAfterChange = (index) => {
    this.setState({ currentSlide: index })
  }

  render () {
    const {
      autoPlay,
      centered,
      children,
      className,
      controls,
      focusOnSelect,
      highlightOnActive,
      highlightOnHover,
      loop,
      overflow,
      peek,
      scrollCount,
      showCount,
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
          <Arrow
            direction='left'
            onPress={this.handlePrevClick}
          >
            <ChevronLeft />
          </Arrow>
        ),
        nextArrow: (
          <Arrow
            direction='right'
            onPress={this.handleNextClick}
          >
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
            focusOnSelect={focusOnSelect || peek}
            ref={this.slider}
            slidesToScroll={scrollCount}
            slidesToShow={showCount}
            infinite={loop}
            draggable={false}
            afterChange={this.handleAfterChange}
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
