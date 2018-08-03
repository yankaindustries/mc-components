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

var HoverHandler = function (_PureComponent) {
  _inherits(HoverHandler, _PureComponent);

  function HoverHandler() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HoverHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HoverHandler.__proto__ || Object.getPrototypeOf(HoverHandler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovering: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HoverHandler, [{
    key: 'onEnter',
    value: function onEnter() {
      this.setState({ hovering: true });
    }
  }, {
    key: 'onLeave',
    value: function onLeave() {
      this.setState({ hovering: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var hovering = this.state.hovering;


      return _react2.default.createElement(
        'div',
        {
          onMouseEnter: this.onEnter.bind(this),
          onMouseLeave: this.onLeave.bind(this)
        },
        children({ hovering: hovering })
      );
    }
  }]);

  return HoverHandler;
}(_react.PureComponent);

HoverHandler.propTypes = {
  children: _propTypes2.default.func.isRequired
};
exports.default = HoverHandler;