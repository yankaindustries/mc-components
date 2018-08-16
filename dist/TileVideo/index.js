function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Unmute from '../Icons/Muted';
import Mute from '../Icons/Unmuted';
var ACCOUNT_ID = '5344802162001';
var PLAYER_ID = 'rkcQq7gAe';

var TileVideo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TileVideo, _PureComponent);

  function TileVideo(props) {
    var _this;

    _classCallCheck(this, TileVideo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileVideo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMuteClick", function () {
      _this.setState(function (state) {
        return {
          muted: !state.muted
        };
      });
    });

    _this.playerRef = React.createRef();
    _this.state = {
      muted: props.muted
    };
    return _this;
  }

  _createClass(TileVideo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        window.bc(this.playerRef.current, {
          playbackRates: [0.5, 1, 1.5, 2]
        });
        window.videojs(this.playerRef.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          controls = _this$props.controls,
          videoId = _this$props.videoId,
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "controls", "videoId"]);

      var muted = this.state.muted;
      var classes = ['mc-tile__component', 'mc-tile-video__video', 'bc-player__video', 'bc-player__video--default', 'mc-tile-video__video', 'video-js', className || ''].join(' ');
      return React.createElement("div", {
        className: "mc-tile-video mc-tile__component"
      }, !controls && React.createElement("a", {
        className: "mc-tile-video__mute",
        onClick: this.onMuteClick
      }, muted ? React.createElement(Unmute, null) : React.createElement(Mute, null)), React.createElement("video", _extends({
        ref: this.playerRef,
        className: classes,
        "data-embed": "default",
        "data-video-id": videoId,
        "data-player-id": PLAYER_ID,
        "data-account": ACCOUNT_ID,
        controls: controls,
        muted: muted
      }, restProps)), children);
    }
  }]);

  return TileVideo;
}(PureComponent);

_defineProperty(TileVideo, "propTypes", {
  autoPlay: PropTypes.bool,
  children: PropTypes.element,
  controls: PropTypes.bool,
  className: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  videoId: PropTypes.string.isRequired
});

_defineProperty(TileVideo, "defaultProps", {
  autoPlay: false,
  controls: false,
  loop: false,
  muted: false
});

export { TileVideo as default };