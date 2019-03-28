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
    scrollCount: 1,
    showCount: 3,
    transition: TRANSITION_SLIDE,
  }

  state = {
    currentSlideIndex: 0,
  }

  constructor (props) {
    super(props)

    this.slider = props.sliderRef || React.createRef()
    console.log(this.slider)
  }

  handlePrevClick = () => {
    const { currentSlideIndex } = this.state
    const prevIndex = currentSlideIndex - 2 < 0 ? 0 : currentSlideIndex - 2

    this.slider.current.slickGoTo(prevIndex)
  }

  handleNextClick = () => {
    const { currentSlideIndex } = this.state
    const nextIndex =
      currentSlideIndex +
      (this.props.children.length - this.state.currentSlideIndex > 4 ? 2 : 1)

    console.log(this.slider)

    this.slider.current.slickGoTo(nextIndex)
  }

  handleAfterChange = (index) => {
    this.setState({ currentSlideIndex: index })
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
