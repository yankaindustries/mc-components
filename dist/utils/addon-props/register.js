'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _PropsTable = require('../PropsTable');

var _PropsTable2 = _interopRequireDefault(_PropsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/display-name */


var PropsPanel = function (_PureComponent) {
  _inherits(PropsPanel, _PureComponent);

  function PropsPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropsPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropsPanel.__proto__ || Object.getPrototypeOf(PropsPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropsPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.channel.on('mc/props/value', function (component) {
        return _this2.setState({ component: component });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var component = this.state.component;


      return !!component && _react2.default.createElement(_PropsTable2.default, { component: this.state.component });
    }
  }]);

  return PropsPanel;
}(_react.PureComponent);

PropsPanel.propTypes = {
  channel: _propTypes2.default.shape({
    on: _propTypes2.default.func
  })
};


_addons2.default.register('mc/props', function () {
  _addons2.default.addPanel('mc/props/panel', {
    title: 'Props',
    render: function render() {
      return _react2.default.createElement(PropsPanel, { channel: _addons2.default.getChannel() });
    }
  });
});