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

var Tile = function (_PureComponent) {
  _inherits(Tile, _PureComponent);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          children = _props.children,
          className = _props.className;


      var classes = ['mc-tile', 'mc-tile--' + aspectRatio, className || ''].join(' ');

      return _react2.default.createElement(
        'div',
        { className: classes },
        children && _react2.default.createElement(
          'div',
          { className: 'mc-tile__content content' },
          children
        )
      );
    }
  }]);

  return Tile;
}(_react.PureComponent);

Tile.propTypes = {
  aspectRatio: _propTypes2.default.oneOf(['1x1', '4x3', '16x9', '100x65', '1000x609', '519x187']),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
Tile.defaultProps = {
  aspectRatio: '16x9'
};
exports.default = Tile;