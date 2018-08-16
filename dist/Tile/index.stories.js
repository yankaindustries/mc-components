import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Placeholder from '../../utils/Placeholder';
import Tile from '../Tile';
import TileImage from '../TileImage';
import TileVideo from '../TileVideo';
import TileOverlay from '../TileOverlay';
import TileCaption from '../TileCaption';
import TileCheck from '../TileCheck';
import AnimationHandler from '../AnimationHandler';
import HoverHandler from '../HoverHandler';
import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png';
storiesOf('components|Tiles', module).add('Summary', function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "Tile"), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "Tile"
  }, React.createElement(Tile, null, React.createElement(Placeholder, null, "(empty)")))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "TileOverlay"
  }, React.createElement(Tile, null, React.createElement(TileOverlay, {
    type: "gradient-bottom"
  }), React.createElement(Placeholder, null)))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "TileCaption"
  }, React.createElement(Tile, null, React.createElement(TileCaption, {
    title: "Shonda Rhimes",
    subtitle: "Teaches Writing"
  }), React.createElement(Placeholder, null)))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "TileCheck"
  }, React.createElement(Tile, null, React.createElement(TileCheck, {
    checked: true
  }), React.createElement(Placeholder, null)))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "TileImage"
  }, React.createElement(Tile, null, React.createElement(TileImage, {
    imageUrl: shondaRhimesThumbnail
  })))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "TileVideo"
  }, React.createElement(Tile, null, React.createElement(TileVideo, {
    videoId: "5450137526001",
    autoPlay: true,
    loop: true,
    muted: true
  }))))), React.createElement("hr", null), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "Animations"
  }, React.createElement(HoverHandler, null, function (_ref) {
    var hovering = _ref.hovering;
    return React.createElement(Tile, null, React.createElement(TileCheck, null, function () {
      return React.createElement(Fragment, null, React.createElement(AnimationHandler, {
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
        subtitle: "Teaches Writing"
      })));
    }));
  }))), React.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, React.createElement(DocSection, {
    title: "Swap"
  }, React.createElement(HoverHandler, null, function (_ref2) {
    var hovering = _ref2.hovering;
    return React.createElement(AnimationHandler, {
      type: "zoom",
      animating: hovering
    }, React.createElement(Tile, null, !hovering && React.createElement(Fragment, null, React.createElement(TileImage, {
      imageUrl: shondaRhimesThumbnail
    }), React.createElement(TileOverlay, {
      type: "gradient-bottom"
    }), React.createElement(TileCaption, {
      title: "Shonda Rhimes",
      subtitle: "Teaches Writing"
    })), hovering && React.createElement(TileVideo, {
      videoId: "5450137526001",
      autoPlay: true,
      loop: true,
      muted: true
    })));
  }))))));
});
storiesOf('components|Tiles/Tile', module).add('Tile', function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "Tile"), React.createElement(DocSection, {
    title: "Props"
  }, React.createElement(PropExample, {
    name: "aspectRatio",
    type: "String[16x9]"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, {
    aspectRatio: "16x9"
  }, React.createElement(Placeholder, null, "16x9"))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, {
    aspectRatio: "4x3"
  }, React.createElement(Placeholder, null, "4x3"))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, {
    aspectRatio: "100x65"
  }, React.createElement(Placeholder, null, "100x65"))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, {
    aspectRatio: "1000x609"
  }, React.createElement(Placeholder, null, "1000x609"))), React.createElement("div", {
    className: "col-sm-4"
  }, React.createElement(Tile, {
    aspectRatio: "519x187"
  }, React.createElement(Placeholder, null, "519x187"))))))));
});