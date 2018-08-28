var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint jsx-quotes: 0 */
import React from 'react';

var PlayCircle = function PlayCircle(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 40 41", width: "1em", height: "1em" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd", opacity: 0.75 },
      React.createElement("path", {
        d: "M19.925 39.413c10.452 0 18.925-8.6 18.925-19.207C38.85 9.6 30.377 1 19.925 1S1 9.599 1 20.206c0 10.608 8.473 19.207 18.925 19.207z",
        stroke: "#FFF",
        strokeWidth: 2
      }),
      React.createElement("path", {
        d: "M27.29 19.662l-9.421-5.71a1.119 1.119 0 0 0-.947-.078c-.308.116-.504.357-.504.622v11.42c0 .265.196.507.504.623a1.123 1.123 0 0 0 .947-.079l9.42-5.71c.217-.13.343-.331.343-.544 0-.212-.126-.413-.343-.544z",
        fill: "#FFF"
      })
    )
  );
};

export default PlayCircle;