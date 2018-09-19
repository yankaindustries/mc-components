var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { renderChildren as renderProp } from '../helpers';

var Background = function (_PureComponent) {
  _inherits(Background, _PureComponent);

  function Background(props) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, props));

    _this.state = {
      loaded: false
    };

    _this.setSizeBy = function () {
      // TODO see why sometimes the refs aren't populated, remove this check
      if (_this.container.current && _this.background.current) {
        var containerRatio = _this.container.current.offsetWidth / _this.container.current.offsetHeight;
        var backgroundRatio = _this.background.current.width / _this.background.current.height;
        var sizeBy = containerRatio > backgroundRatio ? 'width' : 'height';

        _this.setState({ sizeBy: sizeBy });
      }
    };

    _this.onLoad = function () {
      _this.setSizeBy();
      _this.setState({ loaded: true });
      window.addEventListener('resize', _this.setSizeBy.bind(_this));
    };

    _this.container = React.createRef();
    _this.background = React.createRef();
    return _this;
  }

  _createClass(Background, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setSizeBy);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          element = _props.element,
          fit = _props.fit,
          position = _props.position,
          size = _props.size;
      var _state = this.state,
          loaded = _state.loaded,
          sizeBy = _state.sizeBy;

      var _position$split = position.split(' '),
          _position$split2 = _slicedToArray(_position$split, 2),
          x = _position$split2[0],
          y = _position$split2[1];

      var classes = ['mc-background', loaded ? 'mc-background--loaded' : '', 'mc-background--position-x-' + x, 'mc-background--position-y-' + y, 'mc-background--fit-' + fit, 'mc-background--size-' + size, 'mc-background--size-' + size + '-' + sizeBy, className].join(' ');

      return React.createElement(
        'div',
        {
          className: classes,
          ref: this.container
        },
        React.createElement(
          'div',
          { className: 'mc-background__background-container' },
          renderProp(element, {
            className: 'mc-background__background',
            ref: this.background,
            onLoad: this.onLoad
          })
        ),
        React.createElement(
          'div',
          { className: 'mc-background__content-container' },
          React.createElement(
            'div',
            { className: 'mc-background__content' },
            children
          )
        )
      );
    }
  }]);

  return Background;
}(PureComponent);

Background.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  fit: PropTypes.oneOf(['container', 'content', 'background']),
  position: PropTypes.oneOf(['left top', 'center top', 'right top', 'left center', 'center center', 'right center', 'left bottom', 'center bottom', 'right bottom']),
  size: PropTypes.oneOf(['contain', 'cover', 'none'])
};
Background.defaultProps = {
  fit: 'content',
  position: 'center center',
  size: 'none'
};
export default Background;