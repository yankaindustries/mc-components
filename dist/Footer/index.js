function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, Fragment } from 'react';
import { bool } from 'prop-types';
import Logo from '../Icons/Logo';
import SSLBadge from '../Icons/SslBadge';

var Footer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var isMinimal = this.props.isMinimal;
      return React.createElement(Fragment, null, React.createElement("div", {
        className: "mc-site-footer"
      }, React.createElement("div", {
        className: "mc-container mc-contain-inner"
      }, React.createElement(Logo, {
        className: "mc-site-footer__logo-footer"
      }), !isMinimal && React.createElement(Fragment, null, React.createElement("ul", {
        className: "mc-site-footer__links"
      }, React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "/#now-available"
      }, "Browse Classes")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "/all-access-pass"
      }, "All-Access")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "/gift"
      }, "Gifts")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://masterclasshelp.zendesk.com/hc/en-us"
      }, "Help Center")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248"
      }, "Contact Us")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "/privacy"
      }, "Privacy")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "/terms"
      }, "Terms")), React.createElement("li", {
        className: "mc-site-footer__link"
      }, React.createElement("a", {
        href: "http://careers.masterclass.com"
      }, "Careers")), React.createElement("p", {
        className: "mc-site-footer__copyright"
      }, "Copyright \xA9 2018 MasterClass")), React.createElement(SSLBadge, {
        className: "mc-site-footer__ssl-badge"
      })))));
    }
  }]);

  return Footer;
}(PureComponent);

_defineProperty(Footer, "propTypes", {
  isMinimal: bool
});

_defineProperty(Footer, "defaultProps", {
  isMinimal: false
});

export { Footer as default };