import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Tile from '../Tile';
import TileVideo from '../TileVideo';
storiesOf('components|Tiles/TileVideo', module).add('TileVideo', withProps(TileVideo)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "TileVideo"), React.createElement(DocSection, {
    title: "Props"
  }, React.createElement(PropExample, {
    name: "autoPlay",
    type: "Boolean"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileVideo, {
    videoId: "5450137526001",
    autoPlay: true
  }))))), React.createElement(PropExample, {
    name: "controls",
    type: "Boolean"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileVideo, {
    videoId: "5450137526001",
    controls: true
  }))))), React.createElement(PropExample, {
    name: "loop",
    type: "Boolean"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileVideo, {
    videoId: "5450137526001",
    controls: true,
    loop: true
  }))))), React.createElement(PropExample, {
    name: "muted",
    type: "Boolean"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-6"
  }, React.createElement(Tile, null, React.createElement(TileVideo, {
    videoId: "5450137526001",
    controls: true,
    muted: true
  }))))))));
}));