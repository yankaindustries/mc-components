function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var BackArrow = function BackArrow(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 5 9",
    fill: "none",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.63 9a.374.374 0 0 1-.262-.105l-4.26-4.14a.355.355 0 0 1 0-.51l4.26-4.14c.144-.14.379-.14.523 0a.353.353 0 0 1 0 .51L.894 4.5l3.997 3.885a.353.353 0 0 1 0 .51A.374.374 0 0 1 4.63 9z",
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M4.63 9a.374.374 0 0 1-.262-.105l-4.26-4.14a.355.355 0 0 1 0-.51l4.26-4.14c.144-.14.379-.14.523 0a.353.353 0 0 1 0 .51L.894 4.5l3.997 3.885a.353.353 0 0 1 0 .51A.374.374 0 0 1 4.63 9",
    stroke: "currentColor",
    strokeWidth: 0.5
  }));
};

export default BackArrow;