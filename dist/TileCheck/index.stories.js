import React from 'react';
import { storiesOf } from '@storybook/react';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Placeholder from '../../utils/Placeholder';
import Tile from '../Tile';
import TileCheck from '../TileCheck';
storiesOf('components|Tiles/TileCheck', module).add('TileCheck', function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "TileCheck"), React.createElement(DocSection, {
    title: "Props"
  }, React.createElement(PropExample, {
    name: "checked",
    type: "Boolean"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileCheck, {
    checked: true
  }, function (_ref) {
    var checked = _ref.checked;
    return React.createElement(Placeholder, null, checked ? 'true' : 'false');
  }))), React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileCheck, null, function (_ref2) {
    var checked = _ref2.checked;
    return React.createElement(Placeholder, null, checked ? 'true' : 'false');
  }))))))));
});