'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _ImageTile = require('../ImageTile');

var _ImageTile2 = _interopRequireDefault(_ImageTile);

var _PlayButton = require('../PlayButton');

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _arrow = require('./arrow');

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this.slider = _react2.default.createRef(), _this.handleNext = function () {
      _this.slider.current.slickNext();
    }, _this.handlePrevious = function () {
      _this.slider.current.slickPrev();
    }, _this.renderSlide = function (item) {
      return _react2.default.createElement(
        _ImageTile2.default,
        {
          className: 'mc-carousel__slide',
          imageUrl: item.image,
          key: item.id,
          width: _this.props.slideWidth,
          backgroundGradient: _this.props.hasSlideGradient
        },
        _react2.default.createElement(_PlayButton2.default, { className: 'mc-carousel__slide__play' })
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


      var carouselSettings = Object.assign({}, defaultSettings, settings);

      var classNames = (0, _classnames2.default)('mc-carousel', _defineProperty({}, className, Boolean(className)));

      var renderSlide = this.props.renderSlide || this.renderSlide;

      return _react2.default.createElement(
        'div',
        { className: classNames },
        hasArrows && _react2.default.createElement(_arrow2.default, {
          className: 'mc-carousel__arrow mc-carousel__arrow--left',
          onClick: this.handlePrevious,
          direction: 'left'
        }),
        _react2.default.createElement(
          _reactSlick2.default,
          Object.assign({}, carouselSettings, {
            ref: this.slider
          }),
          this.props.children || slidesDataSource.map(renderSlide)
        ),
        hasArrows && _react2.default.createElement(_arrow2.default, {
          className: 'mc-carousel__arrow mc-carousel__arrow--right',
          onClick: this.handleNext,
          direction: 'right'
        })
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  slidesDataSource: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  children: _propTypes2.default.element,
  onSlideClick: _propTypes2.default.func,
  settings: _propTypes2.default.shape({}),
  className: _propTypes2.default.string,
  slideWidth: _propTypes2.default.number,
  hasSlideGradient: _propTypes2.default.bool,
  hasFaders: _propTypes2.default.bool,
  hasArrows: _propTypes2.default.bool,
  renderSlide: _propTypes2.default.func
};
Carousel.defaultProps = {
  hasArrows: true
};
Carousel.Arrow = _arrow2.default;
exports.default = Carousel;