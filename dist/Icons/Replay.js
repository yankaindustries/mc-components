var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var Replay = function Replay(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 48", width: "1em", height: "1em" }, props),
    React.createElement("path", { d: "M0 0h48v48H0z", fill: "none" }),
    React.createElement("path", { d: "M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z" })
  );
};

export default Replay;