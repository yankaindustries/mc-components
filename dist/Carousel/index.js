var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

var TRANSITION_FADE = 'fade';
var TRANSITION_SLIDE = 'slide';
var CENTERED_PADDING = '200px';

var Arrow = function (_PureComponent) {
  _inherits(Arrow, _PureComponent);

  function Arrow() {
    _classCallCheck(this, Arrow);

    return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
  }

  _createClass(Arrow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          direction = _props.direction,
          onClick = _props.onClick;


      var classes = [className, 'mc-carousel__arrow', 'mc-carousel__arrow--' + direction].join(' ');

      return React.createElement(
        'a',
        {
          className: classes,
          onClick: onClick
        },
        children
      );
    }
  }]);

  return Arrow;
}(PureComponent);

Arrow.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func
};

var Slide = function (_PureComponent2) {
  _inherits(Slide, _PureComponent2);

  function Slide() {
    _classCallCheck(this, Slide);

    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return React.createElement(
        Fragment,
        null,
        children
      );
    }
  }]);

  return Slide;
}(PureComponent);

Slide.propTypes = {
  children: PropTypes.element
};

var Carousel = function (_PureComponent3) {
  _inherits(Carousel, _PureComponent3);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          autoPlay = _props2.autoPlay,
          children = _props2.children,
          className = _props2.className,
          centered = _props2.centered,
          controls = _props2.controls,
          fadeEdges = _props2.fadeEdges,
          loop = _props2.loop,
          sliderRef = _props2.sliderRef,
          scrollCount = _props2.scrollCount,
          showCount = _props2.showCount,
          transition = _props2.transition,
          restProps = _objectWithoutProperties(_props2, ['autoPlay', 'children', 'className', 'centered', 'controls', 'fadeEdges', 'loop', 'sliderRef', 'scrollCount', 'showCount', 'transition']);

      var classes = [className, 'mc-carousel', 'mc-carousel--' + transition, centered ? 'mc-carousel--centered' : '', fadeEdges ? 'mc-carousel--fade-edges' : ''].join(' ');

      var arrows = controls ? {
        arrows: true,
        prevArrow: React.createElement(
          Arrow,
          { direction: 'left' },
          React.createElement(ChevronLeft, null)
        ),
        nextArrow: React.createElement(
          Arrow,
          { direction: 'right' },
          React.createElement(ChevronRight, null)
        )
      } : {
        arrows: false
      };

      return React.createElement(
        'div',
        { className: 'mc-carousel__container' },
        React.createElement(
          Slider,
          _extends({
            autoplay: autoPlay,
            className: classes,
            centerMode: centered || fadeEdges,
            centerPadding: fadeEdges ? CENTERED_PADDING : 0,
            fade: transition === TRANSITION_FADE,
            ref: sliderRef,
            slidesToScroll: scrollCount,
            slidesToShow: showCount,
            infinite: loop
          }, arrows, restProps),
          Children.map(children, function (child) {
            return React.createElement(
              Slide,
              null,
              child
            );
          })
        )
      );
    }
  }]);

  return Carousel;
}(PureComponent);

Carousel.propTypes = {
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
  variableWidth: PropTypes.bool
};
Carousel.defaultProps = {
  autoPlay: false,
  centered: false,
  controls: false,
  fadeEdges: false,
  focusOnSelect: false,
  loop: false,
  scrollCount: 1,
  showCount: 3,
  transition: TRANSITION_SLIDE,
  variableWidth: false
};
export default Carousel;