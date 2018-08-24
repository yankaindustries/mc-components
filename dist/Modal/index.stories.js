function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import Modal from '../Modal'; // Modal Handler

var ModalHandler =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalHandler, _Component);

  function ModalHandler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalHandler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
      return _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openModal", function () {
      return _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  _createClass(ModalHandler, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      return React.createElement("div", {
        style: {
          height: '200px'
        }
      }, React.createElement("div", {
        id: "modal-root"
      }), React.createElement("button", {
        onClick: this.openModal
      }, "Open Modal"), React.createElement(Modal, {
        isOpen: isOpen,
        onClose: this.closeModal
      }, React.createElement("p", null, "Content")));
    }
  }]);

  return ModalHandler;
}(Component);

storiesOf('components|Modals', module).add('ModalHandler', withProps(Modal)(function () {
  return React.createElement(ModalHandler, null);
})).add('ModalHeader', withProps(Modal)(function () {
  return React.createElement("div", {
    style: {
      height: '200px'
    }
  }, React.createElement("div", {
    id: "modal-root"
  }), React.createElement(Modal, {
    isOpen: true,
    onClose: function onClose() {},
    header: "Header",
    subheader: "Subheader"
  }, React.createElement("p", {
    style: {
      height: '200px'
    }
  }, "Content")));
}));