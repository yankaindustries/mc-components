import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Placeholder from '../../utils/Placeholder';
import Tile from '../Tile';
import TileCaption from '../TileCaption';
import AnimationHandler from '../AnimationHandler';
import HoverHandler from '../HoverHandler';
storiesOf('components|Tiles/TileCaption', module).add('TileCaption', withProps(TileCaption)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "TileCaption"), React.createElement(DocSection, {
    title: "Variants"
  }, React.createElement(PropExample, {
    name: "title",
    type: "String"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes"
  }), React.createElement(Placeholder, null))))), React.createElement(PropExample, {
    name: "subtitle",
    type: "String"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes",
    subtitle: "Teaches Writing"
  }), React.createElement(Placeholder, null))))), React.createElement(PropExample, {
    name: "position",
    type: "String"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes",
    subtitle: "Teaches Writing",
    position: "left bottom"
  }), React.createElement(Placeholder, null))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes",
    subtitle: "Teaches Writing",
    position: "center bottom"
  }), React.createElement(Placeholder, null))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes",
    subtitle: "Teaches Writing",
    position: "left below"
  }), React.createElement(Placeholder, null)))))), React.createElement(DocSection, {
    title: "Example"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(HoverHandler, null, function (_ref) {
    var hovering = _ref.hovering;
    return React.createElement(AnimationHandler, {
      type: "zoom",
      animating: hovering
    }, React.createElement(Tile, null, React.createElement(TileCaption, {
      title: "Shonda Rhimes",
      subtitle: "Teaches Writing",
      position: hovering ? 'left below' : 'left bottom'
    }), React.createElement(Placeholder, null)));
  }))))));
}));