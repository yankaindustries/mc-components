'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-underscore-dangle, react/display-name */


var WithProps = function (_PureComponent) {
  _inherits(WithProps, _PureComponent);

  function WithProps() {
    _classCallCheck(this, WithProps);

    return _possibleConstructorReturn(this, (WithProps.__proto__ || Object.getPrototypeOf(WithProps)).apply(this, arguments));
  }

  _createClass(WithProps, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.channel.emit('mc/props/value', this.props.children.__docgenInfo);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.channel.emit('/mc/props/value', 'false');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          story = _props.story,
          context = _props.context;


      return story(context);
    }
  }]);

  return WithProps;
}(_react.PureComponent);

WithProps.propTypes = {
  channel: _propTypes2.default.shape({
    emit: _propTypes2.default.func
  }),
  children: _propTypes2.default.func,
  context: _propTypes2.default.object,
  story: _propTypes2.default.func
};
exports.default = WithProps;
var withProps = exports.withProps = function withProps(component) {
  return function (story) {
    return function (context) {
      return _react2.default.createElement(
        WithProps,
        {
          channel: _addons2.default.getChannel(),
          story: story,
          context: context
        },
        component
      );
    };
  };
};