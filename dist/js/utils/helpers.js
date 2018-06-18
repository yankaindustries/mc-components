"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseInputErrors = exports.parseInputErrors = function parseInputErrors(error) {
  if (!error) {
    return undefined;
  }
  if (Array.isArray(error)) {
    return error[0];
  }
  return error;
};