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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileCaption = function (_PureComponent) {
  _inherits(TileCaption, _PureComponent);

  function TileCaption() {
    _classCallCheck(this, TileCaption);

    return _possibleConstructorReturn(this, (TileCaption.__proto__ || Object.getPrototypeOf(TileCaption)).apply(this, arguments));
  }

  _createClass(TileCaption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          position = _props.position,
          subtitle = _props.subtitle,
          title = _props.title;


      var positionClasses = position.split(' ').map(function (pos) {
        return 'mc-tile-caption--' + pos;
      });

      var classes = ['mc-tile__component', 'mc-tile-caption'].concat(_toConsumableArray(positionClasses), [className || '']).join(' ');

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: 'mc-tile-caption__titles' },
          title && _react2.default.createElement(
            'h4',
            { className: 'mc-tile-caption__title mc-text-h2 mc-text--uppercase' },
            title
          ),
          subtitle && _react2.default.createElement(
            'h5',
            { className: 'mc-tile-caption__subtitle mc-text-h4 mc-text--muted' },
            subtitle
          )
        ),
        children && _react2.default.createElement(
          'div',
          { className: 'mc-tile-caption__content content' },
          children
        )
      );
    }
  }]);

  return TileCaption;
}(_react.PureComponent);

TileCaption.propTypes = {
  children: _propTypes2.default.element,
  className: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(['left bottom', 'center bottom', 'left below', 'center below']),
  subtitle: _propTypes2.default.string,
  title: _propTypes2.default.string
};
TileCaption.defaultProps = {
  position: 'left bottom'
};
exports.default = TileCaption;