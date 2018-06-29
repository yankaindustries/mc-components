'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _playWithCircle = require('../../assets/play-with-circle.svg');

var _playWithCircle2 = _interopRequireDefault(_playWithCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxOverlay = function (_PureComponent) {
  _inherits(CheckboxOverlay, _PureComponent);

  function CheckboxOverlay() {
    _classCallCheck(this, CheckboxOverlay);

    return _possibleConstructorReturn(this, (CheckboxOverlay.__proto__ || Object.getPrototypeOf(CheckboxOverlay)).apply(this, arguments));
  }

  _createClass(CheckboxOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onCheck = _props.onCheck,
          children = _props.children;


      return _react2.default.createElement(
        'a',
        { className: 'overlay-check__checkbox-tile-overlay', onClick: onCheck },
        children,
        _react2.default.createElement('img', { className: 'overlay-check__image', src: _playWithCircle2.default, alt: 'checkmark' })
      );
    }
  }]);

  return CheckboxOverlay;
}(_react.PureComponent);

CheckboxOverlay.propTypes = {
  onCheck: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = CheckboxOverlay;