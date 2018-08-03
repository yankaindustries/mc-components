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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageTile = function (_PureComponent) {
  _inherits(ImageTile, _PureComponent);

  function ImageTile() {
    _classCallCheck(this, ImageTile);

    return _possibleConstructorReturn(this, (ImageTile.__proto__ || Object.getPrototypeOf(ImageTile)).apply(this, arguments));
  }

  _createClass(ImageTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          className = _props.className,
          children = _props.children,
          imageUrl = _props.imageUrl;


      var classNames = (0, _classnames2.default)('tile', 'tile--' + aspectRatio, _defineProperty({}, className, Boolean(className)));

      return _react2.default.createElement(
        'div',
        { className: classNames },
        _react2.default.createElement('div', {
          className: 'background',
          style: { backgroundImage: 'url(\'' + imageUrl + '\')' }
        }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return ImageTile;
}(_react.PureComponent);

ImageTile.propTypes = {
  aspectRatio: _propTypes2.default.oneOf(['4x3', '16x9', '100x65', '1000x609', '519x187']),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  imageUrl: _propTypes2.default.string.isRequired
};
ImageTile.defaultProps = {
  aspectRatio: '16x9',
  className: ''
};
exports.default = ImageTile;