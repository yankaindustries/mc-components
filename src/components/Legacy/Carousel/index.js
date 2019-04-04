import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Slider from 'react-slick'
import ImageTile from '../../ImageTile'
import PlayButton from '../../PlayButton'
import CarouselArrow from './arrow'

const defaultSettings = {
  dots: false,
  infinite: false,
  autoplay: false,
  variableWidth: true,
  rows: 1,
  arrows: false,
}

export default class Carousel extends Component {
  static Arrow = CarouselArrow;

  static propTypes = {
    slidesDataSource: PropTypes.arrayOf(PropTypes.shape({})),
    children: PropTypes.element,
    onSlideClick: PropTypes.func,
    settings: PropTypes.shape({}),
    className: PropTypes.string,
    slideWidth: PropTypes.number,
    hasSlideGradient: PropTypes.bool,
    hasFaders: PropTypes.bool,
    hasArrows: PropTypes.bool,
    renderSlide: PropTypes.func,
  }

  static defaultProps = {
    hasArrows: true,
  }

  handleNext = () => {
    this.slider.current.slickNext()
  }

  handlePrevious = () => {
    this.slider.current.slickPrev()
  }

  slideTo = (index) => {
    this.slider.current.slickGoTo(index)
  }

  slider = React.createRef()

  renderSlide = item => (
    <ImageTile
      className='mc-carousel__slide'
      imageUrl={item.image}
      key={item.id}
      width={this.props.slideWidth}
      backgroundGradient={this.props.hasSlideGradient}
    >
      <PlayButton className='mc-carousel__slide__play' />
    </ImageTile>
  )

  render () {
    const {
      hasArrows,
      settings,
      className,
      slidesDataSource,
    } = this.props

    const carouselSettings = {
      ...defaultSettings,
      ...settings,
    }

    const classNames = cn(
      'mc-carousel',
      { [className]: Boolean(className) },
    )

    const renderSlide = this.props.renderSlide || this.renderSlide

    return (
      <div className={classNames}>
        { hasArrows &&
          <CarouselArrow
            className='mc-carousel__arrow mc-carousel__arrow--prev'
            onClick={this.handlePrevious}
            direction='left'
          />
        }
        <Slider
          {...carouselSettings}
          ref={this.slider}
        >
          {this.props.children || slidesDataSource.map(renderSlide)}
        </Slider>
        { hasArrows &&
          <CarouselArrow
            className='mc-carousel__arrow mc-carousel__arrow--next'
            onClick={this.handleNext}
            direction='right'
          />
        }
      </div>
    )
  }
}
