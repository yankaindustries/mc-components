import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import cn from 'classnames'

import Arrow, { DIRECTION_PREV, DIRECTION_NEXT } from './Arrow'
import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'

import { PROP_TYPE_CHILDREN } from '../constants'


const TRANSITION_FADE = 'fade'
const TRANSITION_SLIDE = 'slide'


export default class Carousel extends PureComponent {
  static propTypes = {
    autoPlay: PropTypes.bool,
    centered: PropTypes.bool,
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    controls: PropTypes.bool,
    dots: PropTypes.bool,
    focusOnSelect: PropTypes.bool,
    highlightOnActive: PropTypes.bool,
    highlightOnHover: PropTypes.bool,
    initialSlide: PropTypes.number,
    loop: PropTypes.bool,
    peek: PropTypes.bool,
    scrollCount: PropTypes.number,
    showCount: PropTypes.number,
    sliderRef: PropTypes.func,
    transition: PropTypes.string,
    variableWidth: PropTypes.bool,
    color: PropTypes.string,
  }

  static defaultProps = {
    autoPlay: false,
    centered: false,
    controls: false,
    focusOnSelect: false,
    highlightOnActive: false,
    highlightOnHover: false,
    loop: false,
    scrollCount: 1,
    showCount: 3,
    transition: TRANSITION_SLIDE,
    variableWidth: false,
    color: '0, 0, 0',
  }

  arrowContainerRef = React.createRef()

  constructor (props) {
    super(props)

    this.slider = props.sliderRef || React.createRef()
  }

  state = {
    initialized: false,
  }

  handleInit = () => this.setState({ initialized: true })

  render () {
    const {
      autoPlay,
      centered,
      children,
      className,
      controls,
      dots,
      focusOnSelect,
      highlightOnActive,
      highlightOnHover,
      loop,
      peek,
      scrollCount,
      showCount,
      transition,
      variableWidth,
      color,
      ...restProps
    } = this.props

    const {
      initialized,
    } = this.state

    const containerClasses = cn({
      'mc-carousel': true,
      'mc-carousel--centered': centered,
      'mc-carousel--highlight-active': highlightOnActive,
      'mc-carousel--highlight-hover': highlightOnHover,
      'mc-carousel--dots': dots,
    })

    const carouselClasses = cn({
      [className]: className,
      'mc-carousel__slider': true,
    })

    const showCountWithVariable = variableWidth ? 1 : showCount
    const adjustedShowCount = peek
      ? showCountWithVariable + 0.75
      : showCountWithVariable

    const lazyLoad = variableWidth ? false : 'ondemand'

    const peekStyles = peek
      ? {
        position: 'absolute',
        right: -16,
        top: 0,
        width: '120px',
        height: '100%',
        background: `
          linear-gradient(
            to left,
            rgba(${color}, 1) 0,
            rgba(${color}, 0) 100%
          ) center no-repeat
        `,
        zIndex: 1,
        pointerEvents: 'none',
      }
      : {}

    const arrowsProps = controls && initialized
      ? {
        arrows: true,
        prevArrow: (
          <Arrow
            direction={DIRECTION_PREV}
            location={this.arrowContainerRef.current}
          >
            <ChevronLeft />
          </Arrow>
        ),
        nextArrow: (
          <Arrow
            direction={DIRECTION_NEXT}
            location={this.arrowContainerRef.current}
          >
            <ChevronRight />
          </Arrow>
        ),
      }
      : {
        arrows: false,
      }

    const dotsProps = dots
      ? {
        dots: true,
        customPaging: () => <button />,
      }
      : {
        dots: false,
      }

    return (
      <div className={containerClasses}>
        <div className='mc-carousel__forced-spacing' />
        <div className='mc-carousel__container'>
          <div className='mc-carousel__inner-container'>
            <div className='mc-carousel__slider-container'>
              <Slider
                autoplay={autoPlay}
                className={carouselClasses}
                centerMode={centered}
                centerPadding={0}
                fade={transition === TRANSITION_FADE}
                focusOnSelect={focusOnSelect}
                ref={this.slider}
                slidesToScroll={scrollCount}
                slidesToShow={adjustedShowCount}
                infinite={loop}
                draggable={false}
                variableWidth={variableWidth}
                onInit={this.handleInit}
                lazyLoad={lazyLoad}
                {...arrowsProps}
                {...dotsProps}
                {...restProps}
              >
                {children}
              </Slider>
            </div>
            {peek && (<div style={peekStyles}></div>)}

            <div
              className='mc-carousel__arrow-container'
              ref={this.arrowContainerRef}
            />
          </div>
        </div>
        <div className='mc-carousel__forced-spacing' />
      </div>
    )
  }
}
