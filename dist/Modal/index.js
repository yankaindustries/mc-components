var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { bool, func, node, string, oneOfType, arrayOf } from 'prop-types';
import cn from 'classnames';

import ModalPortal from '../ModalPortal';
import ModalHeader from '../ModalHeader';
import ClickOutside from '../ClickOutside';
import RoundedBox from '../RoundedBox';

import Close from '../Icons/Close';

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.onClickOutside = function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          shouldCloseOnClickOutside = _this$props.shouldCloseOnClickOutside;

      if (shouldCloseOnClickOutside) {
        onClose();
      }
    }, _this.onPressEsc = function (event) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          shouldCloseOnEsc = _this$props2.shouldCloseOnEsc;

      var escKey = 27;
      var escKeyWasPressed = event.keyCode === escKey;
      if (shouldCloseOnEsc && escKeyWasPressed) {
        onClose();
      }
    }, _this.container = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onPressEsc);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onPressEsc);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          onClose = _props.onClose,
          children = _props.children,
          className = _props.className,
          HeaderComponent = _props.HeaderComponent,
          props = _objectWithoutProperties(_props, ['isOpen', 'onClose', 'children', 'className', 'HeaderComponent']);

      var classNames = cn('modal__container', _defineProperty({}, className, Boolean(className)));

      if (!isOpen) {
        return false;
      }

      return React.createElement(
        ModalPortal,
        null,
        React.createElement(Close, { className: 'modal__close-icon', onClick: onClose }),
        React.createElement(
          ClickOutside,
          {
            divRef: this.container,
            onClickOutside: this.onClickOutside
          },
          React.createElement(
            'div',
            { ref: this.container, className: classNames },
            React.createElement(
              RoundedBox,
              _extends({
                className: 'modal__rounded-box',
                HeaderComponent: HeaderComponent
              }, props),
              React.createElement(Close, { className: 'modal__inner-close-icon', onClick: onClose }),
              children
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(Component);

Modal.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  shouldCloseOnEsc: bool,
  shouldCloseOnClickOutside: bool,
  className: string,
  header: string,
  subheader: string,
  HeaderComponent: func
};
Modal.defaultProps = {
  shouldCloseOnEsc: true,
  shouldCloseOnClickOutside: true,
  className: '',
  HeaderComponent: ModalHeader
};
export default Modal;