'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  table: {
    width: '100%',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderCollapse: 'collapse',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    textAlign: 'left'
  },
  row: {
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
  },
  cell: {
    padding: '5px 10px',
    fontWeight: 300
  }
};

styles.header = Object.assign({}, styles.cell, {
  fontWeight: 600
});

var formatName = function formatName(type) {
  if (type) {
    return type.value && type.value.name ? type.name + '(' + type.value.name + ')' : type.name;
  }

  return null;
};

var formatOptions = function formatOptions(type) {
  if (type && (0, _lodash.isArray)(type.value)) {
    return type.value.map(function (_ref) {
      var value = _ref.value,
          name = _ref.name;
      return value || name;
    }).join(', ');
  }

  return null;
};

var PropsTable = function (_PureComponent) {
  _inherits(PropsTable, _PureComponent);

  function PropsTable() {
    _classCallCheck(this, PropsTable);

    return _possibleConstructorReturn(this, (PropsTable.__proto__ || Object.getPrototypeOf(PropsTable)).apply(this, arguments));
  }

  _createClass(PropsTable, [{
    key: 'render',
    value: function render() {
      var props = this.props.component.props;


      if (!props) {
        return null;
      }

      return _react2.default.createElement(
        'table',
        { style: styles.table },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { style: styles.header },
              'Name'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.header },
              'Type'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.header },
              'Req?'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.header },
              'Def'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          (0, _lodash.map)(props, function (prop, key) {
            return _react2.default.createElement(
              'tr',
              { key: key, style: styles.row },
              _react2.default.createElement(
                'th',
                { style: styles.header },
                key
              ),
              _react2.default.createElement(
                'td',
                { style: styles.cell, title: formatOptions(prop.type) },
                formatName(prop.type)
              ),
              _react2.default.createElement(
                'td',
                { style: styles.cell },
                prop.required ? 'true' : '-'
              ),
              _react2.default.createElement(
                'td',
                { style: styles.cell },
                prop.defaultValue && !(0, _lodash.isEmpty)(prop.defaultValue.value) ? prop.defaultValue.value : '-'
              )
            );
          })
        )
      );
    }
  }]);

  return PropsTable;
}(_react.PureComponent);

PropsTable.propTypes = {
  component: _propTypes2.default.object
};
PropsTable.defaultProps = {
  component: {}
};
exports.default = PropsTable;