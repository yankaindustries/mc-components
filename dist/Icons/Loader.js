var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint jsx-quotes: 0 */
import React from 'react';

var Loader = function Loader(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 120 30", fill: "#fff", width: "1em", height: "1em" }, props),
    React.createElement(
      "circle",
      { cx: 15, cy: 15, r: 15 },
      React.createElement("animate", {
        attributeName: "r",
        from: 15,
        to: 15,
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      React.createElement("animate", {
        attributeName: "fill-opacity",
        from: 1,
        to: 1,
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ),
    React.createElement(
      "circle",
      { cx: 60, cy: 15, r: 9 },
      React.createElement("animate", {
        attributeName: "r",
        from: 9,
        to: 9,
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      React.createElement("animate", {
        attributeName: "fill-opacity",
        from: 0.5,
        to: 0.5,
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ),
    React.createElement(
      "circle",
      { cx: 105, cy: 15, r: 15 },
      React.createElement("animate", {
        attributeName: "r",
        from: 15,
        to: 15,
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      React.createElement("animate", {
        attributeName: "fill-opacity",
        from: 1,
        to: 1,
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    )
  );
};

export default Loader;