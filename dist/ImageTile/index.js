var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

var ImageTile = function (_PureComponent) {
  _inherits(ImageTile, _PureComponent);

  function ImageTile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageTile.__proto__ || Object.getPrototypeOf(ImageTile)).call.apply(_ref, [this].concat(args))), _this), _this.backgroundStyle = function (imagePath) {
      var backgroundGradient = _this.props.backgroundGradient;

      var backgroundImageStyle = 'url(\'' + imagePath + '\')';
      if (backgroundGradient) {
        backgroundImageStyle = '\n        linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),\n        ' + backgroundImageStyle + '\n      ';
      }
      return {
        backgroundImage: backgroundImageStyle
      };
    }, _this.animationStyles = function (style) {
      switch (style) {
        case 'hover-zoom':
          return 'tile--hover-zoom';
        default:
          return 'tile--no-hover';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animationStyle = _props.animationStyle,
          aspectRatio = _props.aspectRatio,
          className = _props.className,
          children = _props.children,
          imageUrl = _props.imageUrl,
          width = _props.width;

      var classNames = cn('tile', 'tile--' + aspectRatio, this.animationStyles(animationStyle), _defineProperty({}, className, Boolean(className)));

      var style = width ? {
        width: width + 'px',
        height: function () {
          var aspectRatioArr = aspectRatio.split('x');
          var widthRatio = aspectRatioArr[0];
          var heigthRatio = aspectRatioArr[1];

          return width * heigthRatio / widthRatio;
        }()
      } : null;

      return React.createElement(
        'div',
        {
          className: classNames,
          style: style },
        React.createElement('div', {
          className: 'background',
          style: this.backgroundStyle(imageUrl)
        }),
        React.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return ImageTile;
}(PureComponent);

ImageTile.propTypes = {
  animationStyle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['4x3', '16x9', '100x65', '1000x609', '519x187']),
  className: PropTypes.string,
  children: PropTypes.node,
  imageUrl: PropTypes.string.isRequired,
  backgroundGradient: PropTypes.bool,
  width: PropTypes.number
};
ImageTile.defaultProps = {
  aspectRatio: '16x9',
  className: '',
  backgroundGradient: true
};
export default ImageTile;