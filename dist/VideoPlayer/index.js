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

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Replay from '../Icons/Replay';

var VideoPlayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(VideoPlayer, _React$PureComponent);

  function VideoPlayer(props) {
    var _this;

    _classCallCheck(this, VideoPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      endscreenOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePlayerReady", function () {
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onVideoReady = _this$props.onVideoReady,
          onPlayerReady = _this$props.onPlayerReady;

      if (onPlay) {
        _this.video.on('play', function () {
          onPlay(_this.video);
        });
      }

      if (onPause) {
        _this.video.on('pause', function () {
          onPause(_this.video);
        });
      }

      _this.video.on('ended', _this.handleVideoEnd);

      if (onVideoReady) {
        _this.video.on('loadedmetadata', function () {
          onVideoReady(_this.video);
        });
      }

      if (onPlayerReady) {
        onPlayerReady(_this.video);
      }

      _this.startSecondsTimer();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleVideoEnd", function () {
      _this.currentTime = 0;
      _this.hasEnded = true;

      if (_this.props.isLooped) {
        _this.video.play();
      } else if (_this.props.endscreenComponent) {
        _this.setState({
          endscreenOpen: true
        });
      }

      if (_this.props.onEnd) {
        _this.props.onEnd(_this.video);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReplayClick", function () {
      _this.video.play();

      _this.setState({
        endscreenOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupVideo", function () {
      window.bc(_this.playerRef.current, {
        playbackRates: [0.5, 1, 1.5, 2]
      });
      _this.video = window.videojs(_this.playerRef.current);

      _this.video.ready(_this.handlePlayerReady);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "replaceWith", function (videoId) {
      if (_this.video.customOverlay) {
        _this.video.customOverlay.close();
      }

      _this.video.catalog.getVideo(videoId, function (error, video) {
        if (error && _this.props.onError) {
          _this.props.onError(error, _this.video);

          return;
        }

        _this.video.catalog.load(video);

        _this.hasEnded = false;
        _this.currentTime = 0;

        _this.setState({
          endscreenOpen: false
        });

        _this.video.play();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startSecondsTimer", function () {
      if (_this.props.onTimeChange) {
        _this.video.on('timeupdate', function () {
          var currentTime = Math.floor(_this.video.currentTime());
          var remainingTime = Math.floor(_this.video.remainingTime());

          if (_this.currentTime < currentTime) {
            _this.currentTime = currentTime;

            _this.props.onTimeChange(currentTime, remainingTime);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderEndScreen", function () {
      return React.createElement("div", {
        className: "bc-player-endscreen"
      }, React.createElement(Replay, {
        className: "bc-player-endscreen__replay",
        onClick: _this.handleReplayClick
      }), React.createElement("div", {
        className: "bc-player-endscreen__content"
      }, _this.props.endscreenComponent));
    });

    _this.playerRef = React.createRef();
    _this.currentTime = 0;
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        this.setupVideo();
      } else {
        var _this$props2 = this.props,
            playerId = _this$props2.playerId,
            accountId = _this$props2.accountId;
        var bcScript = document.createElement('script');
        bcScript.src = "//players.brightcove.net/".concat(accountId, "/").concat(playerId, "_default/index.min.js");
        document.body.appendChild(bcScript); // Call a function to play the video once player's JavaScropt loaded

        bcScript.onload = this.setupVideo;
      }

      if (this.props.progress) {
        this.playerRef.current.currentTime = this.props.progress;
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.videoId !== nextProps.videoId) {
        this.replaceWith(nextProps.videoId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          endscreenComponent = _this$props3.endscreenComponent,
          hasBreakpoints = _this$props3.hasBreakpoints,
          theme = _this$props3.theme,
          videoId = _this$props3.videoId,
          playerId = _this$props3.playerId,
          hasAutoplay = _this$props3.hasAutoplay,
          hasControls = _this$props3.hasControls,
          isMuted = _this$props3.isMuted,
          accountId = _this$props3.accountId;
      return React.createElement("div", {
        className: cn('bc-player', {
          'bc-player--endscreen-open': this.state.endscreenOpen,
          'bc-player--has-breakpoints': hasBreakpoints
        })
      }, endscreenComponent && this.renderEndScreen(), React.createElement("div", {
        className: "bc-player__wrapper"
      }, React.createElement("video", {
        "data-application-id": true,
        ref: this.playerRef,
        className: cn('video-js', 'bc-player__video', "bc-player__video--".concat(theme)),
        "data-embed": "default",
        "data-video-id": videoId,
        "data-player-id": playerId,
        "data-account": accountId,
        autoPlay: hasAutoplay ? 'autoplay' : '',
        muted: isMuted ? 'muted' : '',
        controls: hasControls ? 'controls' : ''
      })));
    }
  }]);

  return VideoPlayer;
}(React.PureComponent);

_defineProperty(VideoPlayer, "propTypes", {
  playerId: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,

  /** Player theme styles, must have correlating styles to go with it */
  theme: PropTypes.oneOf(['default', 'chapter']),

  /** Pass in a react component to be shown at the end of the video. */
  endscreenComponent: PropTypes.element,

  /**
   * Keeps video constrained to standard sizes, eg 1080x720.
   * Used to keep videos looking crisp.
   * Scales responsively.
   * */
  hasBreakpoints: PropTypes.bool,
  hasControls: PropTypes.bool,
  isMuted: PropTypes.bool,
  isLooped: PropTypes.bool,
  hasAutoplay: PropTypes.bool,

  /** Player has been initialized */
  onPlayerReady: PropTypes.func,

  /** Video is loaded and ready to play */
  onVideoReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onTimeChange: PropTypes.func,
  onError: PropTypes.func,
  accountId: PropTypes.string,
  progress: PropTypes.number
});

_defineProperty(VideoPlayer, "defaultProps", {
  playerId: 'rkcQq7gAe',
  videoId: '5450137526001',
  theme: 'default',
  isLooped: false,
  isMuted: false,
  hasAutoplay: true,
  hasControls: true,
  hasBreakpoints: false,
  accountId: '5344802162001'
});

export { VideoPlayer as default };