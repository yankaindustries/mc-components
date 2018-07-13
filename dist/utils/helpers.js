'use strict';

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

var NumberToPX = exports.NumberToPX = function NumberToPX(value) {
  return typeof value === 'number' ? value + 'px' : value;
};

var FormatClassTitle = exports.FormatClassTitle = function FormatClassTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var instructorName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (title.toLowerCase().indexOf(instructorName.toLowerCase()) === -1) {
    return title;
  }
  return title.trim().slice(instructorName.length).trim();
};