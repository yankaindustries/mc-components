var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Slider from 'react-slick';
import ImageTile from '../../ImageTile';
import PlayButton from '../../PlayButton';
import CarouselArrow from './arrow';

var defaultSettings = {
  dots: false,
  infinite: false,
  autoplay: false,
  variableWidth: true,
  rows: 1,
  arrows: false
};

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this.handleNext = function () {
      _this.slider.current.slickNext();
    }, _this.handlePrevious = function () {
      _this.slider.current.slickPrev();
    }, _this.slideTo = function (index) {
      _this.slider.current.slickGoTo(index);
    }, _this.slider = React.createRef(), _this.renderSlide = function (item) {
      return React.createElement(
        ImageTile,
        {
          className: 'mc-carousel__slide',
          imageUrl: item.image,
          key: item.id,
          width: _this.props.slideWidth,
          backgroundGradient: _this.props.hasSlideGradient
        },
        React.createElement(PlayButton, { className: 'mc-carousel__slide__play' })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasArrows = _props.hasArrows,
          settings = _props.settings,
          className = _props.className,
          slidesDataSource = _props.slidesDataSource;


      var carouselSettings = _extends({}, defaultSettings, settings);

      var classNames = cn('mc-carousel', _defineProperty({}, className, Boolean(className)));

      var renderSlide = this.props.renderSlide || this.renderSlide;

      return React.createElement(
        'div',
        { className: classNames },
        hasArrows && React.createElement(CarouselArrow, {
          className: 'mc-carousel__arrow mc-carousel__arrow--left',
          onClick: this.handlePrevious,
          direction: 'left'
        }),
        React.createElement(
          Slider,
          _extends({}, carouselSettings, {
            ref: this.slider
          }),
          this.props.children || slidesDataSource.map(renderSlide)
        ),
        hasArrows && React.createElement(CarouselArrow, {
          className: 'mc-carousel__arrow mc-carousel__arrow--right',
          onClick: this.handleNext,
          direction: 'right'
        })
      );
    }
  }]);

  return Carousel;
}(Component);

Carousel.Arrow = CarouselArrow;
Carousel.propTypes = {
  slidesDataSource: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.element,
  onSlideClick: PropTypes.func,
  settings: PropTypes.shape({}),
  className: PropTypes.string,
  slideWidth: PropTypes.number,
  hasSlideGradient: PropTypes.bool,
  hasFaders: PropTypes.bool,
  hasArrows: PropTypes.bool,
  renderSlide: PropTypes.func
};
Carousel.defaultProps = {
  hasArrows: true
};
export default Carousel;