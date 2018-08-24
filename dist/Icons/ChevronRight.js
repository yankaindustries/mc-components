var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var ChevronRight = function ChevronRight(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 11 18", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.793.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L8.086 9 .793 1.707a1 1 0 0 1 0-1.414z",
      fill: "currentColor"
    })
  );
};

export default ChevronRight;