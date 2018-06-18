'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalPortal = require('../ModalPortal');

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ModalHeader = require('../ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _CloseIcon = require('../icons/CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _ClickOutside = require('../ClickOutside');

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

var _RoundedBox = require('../RoundedBox');

var _RoundedBox2 = _interopRequireDefault(_RoundedBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.container = _react2.default.createRef(), _this.onClickOutside = function () {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

      var classNames = (0, _classnames2.default)('modal__container', _defineProperty({}, className, Boolean(className)));

      if (!isOpen) {
        return false;
      }

      return _react2.default.createElement(
        _ModalPortal2.default,
        null,
        _react2.default.createElement(_CloseIcon2.default, { className: 'modal__close-icon', onClick: onClose }),
        _react2.default.createElement(
          _ClickOutside2.default,
          {
            divRef: this.container,
            onClickOutside: this.onClickOutside
          },
          _react2.default.createElement(
            'div',
            { ref: this.container, className: classNames },
            _react2.default.createElement(
              _RoundedBox2.default,
              Object.assign({
                className: 'modal__rounded-box',
                HeaderComponent: HeaderComponent
              }, props),
              _react2.default.createElement(_CloseIcon2.default, { className: 'modal__inner-close-icon', onClick: onClose }),
              children
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes.bool.isRequired,
  onClose: _propTypes.func.isRequired,
  children: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.node), _propTypes.node]).isRequired,
  shouldCloseOnEsc: _propTypes.bool,
  shouldCloseOnClickOutside: _propTypes.bool,
  className: _propTypes.string,
  header: _propTypes.string,
  subheader: _propTypes.string,
  HeaderComponent: _propTypes.func
};
Modal.defaultProps = {
  shouldCloseOnEsc: true,
  shouldCloseOnClickOutside: true,
  className: '',
  HeaderComponent: _ModalHeader2.default
};
exports.default = Modal;