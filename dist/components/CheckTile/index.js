'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ImageTile = require('../ImageTile');

var _ImageTile2 = _interopRequireDefault(_ImageTile);

var _CheckboxOverlay = require('../CheckboxOverlay');

var _CheckboxOverlay2 = _interopRequireDefault(_CheckboxOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckTile = function (_PureComponent) {
  _inherits(CheckTile, _PureComponent);

  function CheckTile() {
    _classCallCheck(this, CheckTile);

    return _possibleConstructorReturn(this, (CheckTile.__proto__ || Object.getPrototypeOf(CheckTile)).apply(this, arguments));
  }

  _createClass(CheckTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children;


      var classNames = ['overlay-check', checked ? 'overlay-check--checked' : 'overlay-check--unchecked'].join(' ');

      return _react2.default.createElement(
        _ImageTile2.default,
        Object.assign({ className: classNames }, this.props),
        _react2.default.createElement(
          _CheckboxOverlay2.default,
          this.props,
          children
        )
      );
    }
  }]);

  return CheckTile;
}(_react.PureComponent);

CheckTile.propTypes = {
  checked: _propTypes2.default.bool,
  onCheck: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = CheckTile;