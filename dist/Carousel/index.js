function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Slider from 'react-slick';
import ImageTile from '../ImageTile';
import PlayButton from '../PlayButton';
import CarouselArrow from './arrow';
var defaultSettings = {
  dots: false,
  infinite: false,
  autoplay: false,
  variableWidth: true,
  rows: 1,
  arrows: false
};

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNext", function () {
      _this.slider.current.slickNext();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePrevious", function () {
      _this.slider.current.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slideTo", function (index) {
      _this.slider.current.slickGoTo(index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slider", React.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSlide", function (item) {
      return React.createElement(ImageTile, {
        className: "mc-carousel__slide",
        imageUrl: item.image,
        key: item.id,
        width: _this.props.slideWidth,
        backgroundGradient: _this.props.hasSlideGradient
      }, React.createElement(PlayButton, {
        className: "mc-carousel__slide__play"
      }));
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hasArrows = _this$props.hasArrows,
          settings = _this$props.settings,
          className = _this$props.className,
          slidesDataSource = _this$props.slidesDataSource;

      var carouselSettings = _objectSpread({}, defaultSettings, settings);

      var classNames = cn('mc-carousel', _defineProperty({}, className, Boolean(className)));
      var renderSlide = this.props.renderSlide || this.renderSlide;
      return React.createElement("div", {
        className: classNames
      }, hasArrows && React.createElement(CarouselArrow, {
        className: "mc-carousel__arrow mc-carousel__arrow--left",
        onClick: this.handlePrevious,
        direction: "left"
      }), React.createElement(Slider, _extends({}, carouselSettings, {
        ref: this.slider
      }), this.props.children || slidesDataSource.map(renderSlide)), hasArrows && React.createElement(CarouselArrow, {
        className: "mc-carousel__arrow mc-carousel__arrow--right",
        onClick: this.handleNext,
        direction: "right"
      }));
    }
  }]);

  return Carousel;
}(Component);

_defineProperty(Carousel, "Arrow", CarouselArrow);

_defineProperty(Carousel, "propTypes", {
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
});

_defineProperty(Carousel, "defaultProps", {
  hasArrows: true
});

export { Carousel as default };