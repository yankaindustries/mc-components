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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { renderChildren } from '../helpers';
import ToggleHandler from '../ToggleHandler';
import Check from '../Icons/CheckCircle';

var TileCheck =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TileCheck, _PureComponent);

  function TileCheck() {
    _classCallCheck(this, TileCheck);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileCheck).apply(this, arguments));
  }

  _createClass(TileCheck, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          children = _this$props.children,
          onChange = _this$props.onChange;

      var classNames = function classNames(toggled) {
        return ['mc-tile__component', 'mc-tile-check', toggled ? 'mc-tile-check--checked' : 'mc-tile-check--unchecked'].join(' ');
      };

      return React.createElement(ToggleHandler, {
        toggled: checked,
        onChange: onChange
      }, function (_ref) {
        var toggled = _ref.toggled,
            onClick = _ref.onClick;
        return React.createElement("a", {
          className: classNames(checked),
          onClick: onClick
        }, toggled && React.createElement(Check, {
          className: "mc-tile-check__check"
        }), children && React.createElement("div", {
          className: "mc-tile__content"
        }, renderChildren(children, {
          checked: toggled
        })));
      });
    }
  }]);

  return TileCheck;
}(PureComponent);

_defineProperty(TileCheck, "propTypes", {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onChange: PropTypes.func
});

_defineProperty(TileCheck, "defaultProps", {
  checked: false,
  onChange: noop
});

export { TileCheck as default };