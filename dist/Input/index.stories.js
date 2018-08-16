function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import InputComponent from '../Input'; // Input Handler

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement("div", {
        style: {
          maxWidth: '500px'
        }
      }, React.createElement(InputComponent, _extends({}, this.props, {
        value: value,
        onChange: function onChange(value) {
          return _this2.setState({
            value: value
          });
        }
      })));
    }
  }]);

  return Input;
}(Component);

storiesOf('components|Forms/Input', module).add('default', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My input"
  });
})).add('with label', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My input",
    label: "My input"
  });
})).add('fixed width', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My input",
    fullWidth: false,
    style: {
      width: '200px'
    }
  });
})).add('with error', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My email",
    error: "Email is required"
  });
})).add('with error and label', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My email",
    label: "My email",
    error: "Email is required"
  });
})).add('without placeholder', withProps(InputComponent)(function () {
  return React.createElement(Input, null);
})).add('disabled', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My email",
    disabled: true
  });
})).add('with warning', withProps(InputComponent)(function () {
  return React.createElement(Input, {
    placeholder: "My email",
    warning: "Did you mean johndoe@gmail.com?"
  });
}));