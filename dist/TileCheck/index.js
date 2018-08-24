var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { renderChildren } from '../helpers';

import ToggleHandler from '../ToggleHandler';

import Check from '../Icons/CheckCircle';

var TileCheck = function (_PureComponent) {
  _inherits(TileCheck, _PureComponent);

  function TileCheck() {
    _classCallCheck(this, TileCheck);

    return _possibleConstructorReturn(this, (TileCheck.__proto__ || Object.getPrototypeOf(TileCheck)).apply(this, arguments));
  }

  _createClass(TileCheck, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          onChange = _props.onChange;


      var classNames = function classNames(toggled) {
        return ['mc-tile__component', 'mc-tile-check', toggled ? 'mc-tile-check--checked' : 'mc-tile-check--unchecked'].join(' ');
      };

      return React.createElement(
        ToggleHandler,
        {
          toggled: checked,
          onChange: onChange
        },
        function (_ref) {
          var toggled = _ref.toggled,
              onClick = _ref.onClick;
          return React.createElement(
            'a',
            { className: classNames(checked), onClick: onClick },
            toggled && React.createElement(Check, { className: 'mc-tile-check__check' }),
            children && React.createElement(
              'div',
              { className: 'mc-tile__content' },
              renderChildren(children, { checked: toggled })
            )
          );
        }
      );
    }
  }]);

  return TileCheck;
}(PureComponent);

TileCheck.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onChange: PropTypes.func
};
TileCheck.defaultProps = {
  checked: false,
  onChange: noop
};
export default TileCheck;