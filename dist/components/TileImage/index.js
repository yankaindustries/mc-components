'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileImage = function (_PureComponent) {
  _inherits(TileImage, _PureComponent);

  function TileImage() {
    _classCallCheck(this, TileImage);

    return _possibleConstructorReturn(this, (TileImage.__proto__ || Object.getPrototypeOf(TileImage)).apply(this, arguments));
  }

  _createClass(TileImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          imageUrl = _props.imageUrl;


      var classes = ['mc-tile__component', 'mc-tile-image', className || ''].join(' ');

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement('div', {
          className: 'mc-tile-image__image background',
          style: { backgroundImage: 'url(\'' + imageUrl + '\')' }
        }),
        children && _react2.default.createElement(
          'div',
          { className: 'mc-tile__content content' },
          children
        )
      );
    }
  }]);

  return TileImage;
}(_react.PureComponent);

TileImage.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  imageUrl: _propTypes2.default.string.isRequired
};
TileImage.defaultProps = {
  className: ''
};
exports.default = TileImage;