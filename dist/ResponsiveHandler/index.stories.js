import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import ResponsiveHandler from './index';
import Tile from '../Tile';
import TileImage from '../TileImage';
import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png';
storiesOf('utilities|ResponsiveHandler', module).add('default', withProps(ResponsiveHandler)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("h1", {
    className: "mc-text-h1"
  }, "ResponsiveHandler"), React.createElement(DocSection, {
    title: "Example"
  }, React.createElement(PropExample, null, React.createElement("div", {
    className: "row row--vertcal-space"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement(ResponsiveHandler, null, function (_ref) {
    var gteMD = _ref.gteMD;
    return React.createElement(Tile, {
      aspectRatio: gteMD ? '519x187' : '16x9'
    }, React.createElement(TileImage, {
      imageUrl: shondaRhimesThumbnail
    }));
  })), React.createElement("div", {
    className: "col-md-4"
  }, React.createElement(Tile, {
    aspectRatio: "16x9"
  }, React.createElement(TileImage, {
    imageUrl: shondaRhimesThumbnail
  }))), React.createElement("div", {
    className: "col-md-4"
  }, React.createElement(Tile, {
    aspectRatio: "16x9"
  }, React.createElement(TileImage, {
    imageUrl: shondaRhimesThumbnail
  }))), React.createElement("div", {
    className: "col-md-4"
  }, React.createElement(Tile, {
    aspectRatio: "16x9"
  }, React.createElement(TileImage, {
    imageUrl: shondaRhimesThumbnail
  })))))));
}));