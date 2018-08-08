'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CodeExample = require('./CodeExample');

var _CodeExample2 = _interopRequireDefault(_CodeExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = function (_PureComponent) {
  _inherits(Definition, _PureComponent);

  function Definition() {
    _classCallCheck(this, Definition);

    return _possibleConstructorReturn(this, (Definition.__proto__ || Object.getPrototypeOf(Definition)).apply(this, arguments));
  }

  _createClass(Definition, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          type = _props.type,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: 'example--definition' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-10' },
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
          _react2.default.createElement('div', { className: 'col-2 text-right' })
        ),
        _react2.default.createElement(
          _CodeExample2.default,
          null,
          children
        )
      );
    }
  }]);

  return Definition;
}(_react.PureComponent);

Definition.propTypes = {
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};
exports.default = Definition;