function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { arrayOf, shape, bool, string } from 'prop-types';
import cn from 'classnames';
import NavBarMenuItem from '../NavBarMenuItem';

var NavBarMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavBarMenu, _PureComponent);

  function NavBarMenu() {
    _classCallCheck(this, NavBarMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBarMenu).apply(this, arguments));
  }

  _createClass(NavBarMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          menuLinks = _this$props.menuLinks;
      var dropDownClassName = cn('navbar-menu', {
        'navbar-menu--open': isOpen
      });
      return React.createElement("ul", {
        className: dropDownClassName
      }, menuLinks.map(function (menuLink, index) {
        return React.createElement(NavBarMenuItem, _extends({}, menuLink, {
          key: index,
          centered: menuLinks.length === index + 1
        }));
      }));
    }
  }]);

  return NavBarMenu;
}(PureComponent);

_defineProperty(NavBarMenu, "propTypes", {
  isOpen: bool.isRequired,
  menuLinks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    helperText: string
  })).isRequired
});

export { NavBarMenu as default };