var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Replay from '../Icons/Replay';

var VideoPlayer = function (_React$PureComponent) {
  _inherits(VideoPlayer, _React$PureComponent);

  function VideoPlayer(props) {
    _classCallCheck(this, VideoPlayer);

    var _this = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this, props));

    _this.state = { endscreenOpen: false };

    _this.handlePlayerReady = function () {
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
    };

    _this.handleVideoEnd = function () {
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
    };

    _this.handleReplayClick = function () {
      _this.video.play();
      _this.setState({
        endscreenOpen: false
      });
    };

    _this.setupVideo = function () {
      window.bc(_this.playerRef.current, {
        playbackRates: [0.5, 1, 1.5, 2]
      });
      _this.video = window.videojs(_this.playerRef.current);
      _this.video.ready(_this.handlePlayerReady);
    };

    _this.replaceWith = function (videoId) {
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
    };

    _this.startSecondsTimer = function () {
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
    };

    _this.renderEndScreen = function () {
      return React.createElement(
        'div',
        { className: 'bc-player-endscreen' },
        React.createElement(Replay, {
          className: 'bc-player-endscreen__replay',
          onClick: _this.handleReplayClick
        }),
        React.createElement(
          'div',
          { className: 'bc-player-endscreen__content' },
          _this.props.endscreenComponent
        )
      );
    };

    _this.playerRef = React.createRef();
    _this.currentTime = 0;
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        this.setupVideo();
      } else {
        var _props = this.props,
            playerId = _props.playerId,
            accountId = _props.accountId;


        var bcScript = document.createElement('script');
        bcScript.src = '//players.brightcove.net/' + accountId + '/' + playerId + '_default/index.min.js';

        document.body.appendChild(bcScript);
        // Call a function to play the video once player's JavaScropt loaded
        bcScript.onload = this.setupVideo;
      }

      if (this.props.progress) {
        this.playerRef.current.currentTime = this.props.progress;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.videoId !== nextProps.videoId) {
        this.replaceWith(nextProps.videoId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          endscreenComponent = _props2.endscreenComponent,
          hasBreakpoints = _props2.hasBreakpoints,
          theme = _props2.theme,
          videoId = _props2.videoId,
          playerId = _props2.playerId,
          hasAutoplay = _props2.hasAutoplay,
          hasControls = _props2.hasControls,
          isMuted = _props2.isMuted,
          accountId = _props2.accountId;


      return React.createElement(
        'div',
        {
          className: cn('bc-player', {
            'bc-player--endscreen-open': this.state.endscreenOpen,
            'bc-player--has-breakpoints': hasBreakpoints
          })
        },
        endscreenComponent && this.renderEndScreen(),
        React.createElement(
          'div',
          { className: 'bc-player__wrapper' },
          React.createElement('video', {
            'data-application-id': true,
            ref: this.playerRef,
            className: cn('video-js', 'bc-player__video', 'bc-player__video--' + theme),
            'data-embed': 'default',
            'data-video-id': videoId,
            'data-player-id': playerId,
            'data-account': accountId,
            autoPlay: hasAutoplay ? 'autoplay' : '',
            muted: isMuted ? 'muted' : '',
            controls: hasControls ? 'controls' : ''
          })
        )
      );
    }
  }]);

  return VideoPlayer;
}(React.PureComponent);

VideoPlayer.propTypes = {
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
};
VideoPlayer.defaultProps = {
  playerId: 'rkcQq7gAe',
  videoId: '5450137526001',
  theme: 'default',
  isLooped: false,
  isMuted: false,
  hasAutoplay: true,
  hasControls: true,
  hasBreakpoints: false,
  accountId: '5344802162001'
};
export default VideoPlayer;