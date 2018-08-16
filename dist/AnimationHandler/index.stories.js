import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import AnimationHandler from './index';
import HoverHandler from '../HoverHandler';
import Button from '../Button';
import Tile from '../Tile';
import TileImage from '../TileImage';
import TileOverlay from '../TileOverlay';
import TileCaption from '../TileCaption';
import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png';
storiesOf('utilities|AnimationHandler', module).add('default', withProps(AnimationHandler)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("h2", null, "AnimationHandler"), React.createElement(DocSection, {
    title: "Variations"
  }, React.createElement(PropExample, {
    name: "animation",
    type: "String[\"zoom\", \"lift\", \"ken-burns\"]"
  }, React.createElement(HoverHandler, null, function (_ref) {
    var hovering = _ref.hovering;
    return React.createElement(AnimationHandler, {
      type: "zoom",
      animating: hovering
    }, React.createElement(Button, {
      primary: true
    }, "Zoom"));
  }), React.createElement(HoverHandler, null, function (_ref2) {
    var hovering = _ref2.hovering;
    return React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(Button, {
      secondary: true
    }, "Lift"));
  }), React.createElement(HoverHandler, null, function (_ref3) {
    var hovering = _ref3.hovering;
    return React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(Button, {
      tertiary: true
    }, "Ken Burns"));
  }))), React.createElement(DocSection, {
    title: "Example"
  }, React.createElement(PropExample, null, React.createElement("div", {
    style: {
      maxWidth: '500px'
    }
  }, React.createElement(HoverHandler, null, function (_ref4) {
    var hovering = _ref4.hovering;
    return React.createElement(Tile, null, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: shondaRhimesThumbnail
    })), React.createElement(TileOverlay, {
      type: "gradient-bottom"
    }), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Shonda Rhimes",
      subtitle: "Teaches Writing for Television",
      backdrop: true
    })));
  })))));
}));