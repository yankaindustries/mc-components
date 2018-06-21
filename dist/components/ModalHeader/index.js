'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(_ref) {
  var subheader = _ref.subheader,
      header = _ref.header;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    subheader && _react2.default.createElement(
      'h4',
      { className: 'modal-header__subheader' },
      subheader
    ),
    header && _react2.default.createElement(
      'h2',
      { className: 'modal-header__header' },
      header
    )
  );
};

ModalHeader.propTypes = {
  subheader: _propTypes.string,
  header: _propTypes.string
};

exports.default = ModalHeader;