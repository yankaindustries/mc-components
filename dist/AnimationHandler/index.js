var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { renderChildren } from '../helpers';

var AnimationHandler = function (_PureComponent) {
  _inherits(AnimationHandler, _PureComponent);

  function AnimationHandler() {
    _classCallCheck(this, AnimationHandler);

    return _possibleConstructorReturn(this, (AnimationHandler.__proto__ || Object.getPrototypeOf(AnimationHandler)).apply(this, arguments));
  }

  _createClass(AnimationHandler, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animating = _props.animating,
          type = _props.type,
          children = _props.children;


      var classes = ['mc-animation', 'mc-animation--' + type, animating ? 'mc-animation--animating' : ''].join(' ');

      return renderChildren(children, { className: classes });
    }
  }]);

  return AnimationHandler;
}(PureComponent);

AnimationHandler.propTypes = {
  type: PropTypes.oneOf(['zoom', 'ken-burns', 'lift']),
  animating: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
AnimationHandler.defaultProps = {
  type: 'zoom'
};
export default AnimationHandler;