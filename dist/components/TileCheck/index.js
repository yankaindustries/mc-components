'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _helpers = require('../../utils/helpers');

var _ToggleHandler = require('../ToggleHandler');

var _ToggleHandler2 = _interopRequireDefault(_ToggleHandler);

var _checkCircle = require('../../assets/icons/check-circle.svg');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileCheck = function (_PureComponent) {
  _inherits(TileCheck, _PureComponent);

  function TileCheck() {
    _classCallCheck(this, TileCheck);

    return _possibleConstructorReturn(this, (TileCheck.__proto__ || Object.getPrototypeOf(TileCheck)).apply(this, arguments));
  }

  _createClass(TileCheck, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          onChange = _props.onChange;


      var classNames = function classNames(toggled) {
        return ['mc-tile__component', 'mc-tile-check', toggled ? 'mc-tile-check--checked' : 'mc-tile-check--unchecked'].join(' ');
      };

      return _react2.default.createElement(
        _ToggleHandler2.default,
        {
          toggled: checked,
          onChange: onChange
        },
        function (_ref) {
          var toggled = _ref.toggled,
              onClick = _ref.onClick;
          return _react2.default.createElement(
            'a',
            { className: classNames(checked), onClick: onClick },
            toggled && _react2.default.createElement(_checkCircle2.default, { className: 'mc-tile-check__check' }),
            children && _react2.default.createElement(
              'div',
              { className: 'mc-tile__content' },
              (0, _helpers.renderChildren)(children, { checked: toggled })
            )
          );
        }
      );
    }
  }]);

  return TileCheck;
}(_react.PureComponent);

TileCheck.propTypes = {
  checked: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  onChange: _propTypes2.default.func
};
TileCheck.defaultProps = {
  checked: false,
  onChange: _lodash.noop
};
exports.default = TileCheck;