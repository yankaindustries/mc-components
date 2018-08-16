import React from 'react';
import { storiesOf } from '@storybook/react';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Tile from '../Tile';
import TileImage from '../TileImage';
import TileOverlay from '../TileOverlay';
import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png';
storiesOf('components|Tiles/TileOverlay', module).add('TileOverlay', function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "TileOverlay"), React.createElement(DocSection, {
    title: "Props"
  }, React.createElement(PropExample, {
    name: "type",
    type: "String[\"gradient-bottom\"]"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileImage, {
    imageUrl: shondaRhimesThumbnail
  }), React.createElement(TileOverlay, {
    type: "gradient-bottom"
  }))))))));
});