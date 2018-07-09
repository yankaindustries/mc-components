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

var _playWithCircle = require('../../assets/PlayButton/play-with-circle.svg');

var _playWithCircle2 = _interopRequireDefault(_playWithCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayButton = function (_PureComponent) {
  _inherits(PlayButton, _PureComponent);

  function PlayButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlayButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlayButton, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('mc-play-button', _defineProperty({}, this.props.className, !!this.props.className));

      return _react2.default.createElement(
        'a',
        { className: className, onClick: this.onClick },
        _react2.default.createElement('img', { src: _playWithCircle2.default, className: 'mc-play-button__image', alt: this.props.alt })
      );
    }
  }]);

  return PlayButton;
}(_react.PureComponent);

PlayButton.propTypes = {
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  alt: _propTypes2.default.string
};
PlayButton.defaultProps = {
  alt: 'Play'
};
exports.default = PlayButton;