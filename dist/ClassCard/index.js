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

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NumberToPX } from '../helpers';

var ClassCard =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ClassCard, _PureComponent);

  function ClassCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClassCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClassCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTriggerComponent", function (children) {
      var _this$props = _this.props,
          renderLinkComponent = _this$props.renderLinkComponent,
          href = _this$props.href,
          action = _this$props.action;

      if (renderLinkComponent) {
        return renderLinkComponent({
          children: children,
          className: 'mc-class-card__trigger'
        });
      }

      if (href) {
        return React.createElement("a", {
          className: "mc-class-card__trigger mc-class-card__trigger--anchor",
          href: href
        }, children);
      }

      if (action) {
        return React.createElement("button", {
          className: "mc-class-card__trigger mc-class-card__trigger--button",
          onClick: action
        }, children);
      }

      return children;
    });

    return _this;
  }

  _createClass(ClassCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          imageUrl = _this$props2.imageUrl,
          teacherName = _this$props2.teacherName,
          teacherDescription = _this$props2.teacherDescription,
          className = _this$props2.className,
          imageAlt = _this$props2.imageAlt,
          width = _this$props2.width,
          height = _this$props2.height;
      var classNames = "mc-class-card ".concat(className);
      return React.createElement("div", {
        className: classNames,
        style: {
          width: NumberToPX(width),
          height: NumberToPX(height)
        }
      }, this.renderTriggerComponent(React.createElement(Fragment, null, React.createElement("img", {
        className: "mc-class-card__image",
        src: imageUrl,
        alt: imageAlt
      }), React.createElement("div", {
        className: "mc-class-card__caption"
      }, React.createElement("h2", {
        className: "mc-class-card__caption__title"
      }, teacherName), React.createElement("h3", {
        className: "mc-class-card__caption__subtitle"
      }, teacherDescription)))));
    }
  }]);

  return ClassCard;
}(PureComponent);

_defineProperty(ClassCard, "propTypes", {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  teacherName: PropTypes.string.isRequired,
  teacherDescription: PropTypes.string.isRequired,
  action: PropTypes.func,
  href: PropTypes.string,
  renderLinkComponent: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});

_defineProperty(ClassCard, "defaultProps", {
  className: '',
  width: '',
  height: ''
});

_defineProperty(ClassCard, "renderTriggerComponentPropTypes", {
  children: PropTypes.node,
  className: PropTypes.string
});

export { ClassCard as default };