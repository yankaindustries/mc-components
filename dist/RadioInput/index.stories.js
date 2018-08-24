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
import { action } from '@storybook/addon-actions';
import { withProps } from '../../utils/addon-props';
import RadioInput from '../RadioInput'; // Input Handler

var RadioInputHandler =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioInputHandler, _Component);

  function RadioInputHandler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioInputHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioInputHandler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      checked: false
    });

    return _this;
  }

  _createClass(RadioInputHandler, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var checked = this.state.checked;
      return React.createElement("div", {
        style: {
          maxWidth: '500px'
        }
      }, React.createElement(RadioInput, _extends({}, this.props, {
        checked: checked,
        onChange: function onChange() {
          return _this2.setState({
            checked: !checked
          });
        }
      })));
    }
  }]);

  return RadioInputHandler;
}(Component);

storiesOf('components|Forms/RadioInput', module).add('default', withProps(RadioInput)(function () {
  return React.createElement(RadioInput, {
    label: "My radio input",
    onChange: action('clicked')
  });
})).add('checked', withProps(RadioInput)(function () {
  return React.createElement(RadioInput, {
    label: "My radio input",
    onChange: action('clicked'),
    checked: true
  });
})).add('with handler', withProps(RadioInput)(function () {
  return React.createElement(RadioInputHandler, {
    label: "My radio input"
  });
}));