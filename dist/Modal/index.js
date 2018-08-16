function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { bool, func, node, string, oneOfType, arrayOf } from 'prop-types';
import cn from 'classnames';
import ModalPortal from '../ModalPortal';
import ModalHeader from '../ModalHeader';
import ClickOutside from '../ClickOutside';
import RoundedBox from '../RoundedBox';
import Close from '../Icons/Close';

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickOutside", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          shouldCloseOnClickOutside = _this$props.shouldCloseOnClickOutside;

      if (shouldCloseOnClickOutside) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPressEsc", function (event) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          shouldCloseOnEsc = _this$props2.shouldCloseOnEsc;
      var escKey = 27;
      var escKeyWasPressed = event.keyCode === escKey;

      if (shouldCloseOnEsc && escKeyWasPressed) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "container", React.createRef());

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onPressEsc);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onPressEsc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isOpen = _this$props3.isOpen,
          onClose = _this$props3.onClose,
          children = _this$props3.children,
          className = _this$props3.className,
          HeaderComponent = _this$props3.HeaderComponent,
          props = _objectWithoutProperties(_this$props3, ["isOpen", "onClose", "children", "className", "HeaderComponent"]);

      var classNames = cn('modal__container', _defineProperty({}, className, Boolean(className)));

      if (!isOpen) {
        return false;
      }

      return React.createElement(ModalPortal, null, React.createElement(Close, {
        className: "modal__close-icon",
        onClick: onClose
      }), React.createElement(ClickOutside, {
        divRef: this.container,
        onClickOutside: this.onClickOutside
      }, React.createElement("div", {
        ref: this.container,
        className: classNames
      }, React.createElement(RoundedBox, _extends({
        className: "modal__rounded-box",
        HeaderComponent: HeaderComponent
      }, props), React.createElement(Close, {
        className: "modal__inner-close-icon",
        onClick: onClose
      }), children))));
    }
  }]);

  return Modal;
}(Component);

_defineProperty(Modal, "propTypes", {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  shouldCloseOnEsc: bool,
  shouldCloseOnClickOutside: bool,
  className: string,
  header: string,
  subheader: string,
  HeaderComponent: func
});

_defineProperty(Modal, "defaultProps", {
  shouldCloseOnEsc: true,
  shouldCloseOnClickOutside: true,
  className: '',
  HeaderComponent: ModalHeader
});

export { Modal as default };