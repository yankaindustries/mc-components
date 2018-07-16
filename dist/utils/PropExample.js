'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _jsxToString = require('jsx-to-string');

var _jsxToString2 = _interopRequireDefault(_jsxToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toString = function toString(node) {
  return (0, _jsxToString2.default)(node, { shortBooleanSyntax: true });
};

var Definition = function (_PureComponent) {
  _inherits(Definition, _PureComponent);

  function Definition() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Definition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Definition.__proto__ || Object.getPrototypeOf(Definition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showCode: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Definition, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          type = _props.type,
          children = _props.children;


      var code = Array.isArray(children) ? children.map(toString).join('\n') : toString(children);

      return _react2.default.createElement(
        'div',
        { className: 'example--definition' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement(
                'span',
                { className: 'example--definition-name' },
                name
              ),
              type && _react2.default.createElement(
                'span',
                { className: 'example--definition-type' },
                '\xA0<',
                type,
                '>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2 text-right' },
            _react2.default.createElement(
              'a',
              {
                onClick: function onClick() {
                  _this2.setState({ showCode: !_this2.state.showCode });
                }
              },
              '</>'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'example--render' },
          children
        ),
        this.state.showCode && _react2.default.createElement(
          _reactHighlight2.default,
          { language: 'html' },
          code
        )
      );
    }
  }]);

  return Definition;
}(_react.PureComponent);

Definition.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = Definition;