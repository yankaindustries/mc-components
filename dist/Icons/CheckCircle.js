var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var CheckCircle = function CheckCircle(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 42 42", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      clipRule: "evenodd",
      d: "M21.279 39.863c10.453 0 18.927-8.476 18.927-18.931 0-5.228-2.119-9.961-5.544-13.387a18.955 18.955 0 0 0-6.139-4.109 18.78 18.78 0 0 0-5.389-1.346 19.15 19.15 0 0 0-5.549.27c-1.23.244-2.418.607-3.55 1.076a18.955 18.955 0 0 0-6.14 4.109A18.875 18.875 0 0 0 2.353 20.93c0 10.456 8.474 18.932 18.927 18.932z",
      stroke: "currentColor",
      strokeWidth: 2.73
    }),
    React.createElement("path", {
      d: "M15.37 20.552l4.558 4.283 8.059-8.565",
      stroke: "currentColor",
      strokeWidth: 2.73,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  );
};

export default CheckCircle;