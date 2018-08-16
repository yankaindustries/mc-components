import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
storiesOf('foundation|Type', module).add('default', withInfo()(function () {
  return React.createElement("div", {
    className: "example-mc-type"
  }, React.createElement("div", {
    className: "container example--section"
  }, React.createElement("h2", {
    className: "mc-text-d1"
  }, "Typography"), React.createElement("p", {
    className: "mc-text-p"
  }, "A showcase of the available type styles in mc-components.")), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Display 1"), React.createElement("h1", {
    className: "mc-text-d1"
  }, "Malcolm Gladwell"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-d1")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Display 2"), React.createElement("h1", {
    className: "mc-text-d2"
  }, "Teaches Writing"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-d2")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "H1"), React.createElement("h1", {
    className: "mc-text-h1"
  }, "Unlock Every Class with the All\u2011Access Pass"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-h1")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "H2"), React.createElement("h2", {
    className: "mc-text-h2"
  }, "All-Access Pass"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-h2")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "H3"), React.createElement("h3", {
    className: "mc-text-h3"
  }, "Now Available"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-h3")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "H4"), React.createElement("h4", {
    className: "mc-text-h4"
  }, "Diane Von Furstenburg"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-h4")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "H5"), React.createElement("h5", {
    className: "mc-text-h5"
  }, "Teaches Fashion"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-h5")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Body"), React.createElement("p", null, "Online classes taught by the world's greatest minds. Now get unlimited access to all classes."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, "Default body text")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Intro"), React.createElement("p", {
    className: "mc-text-intro"
  }, "Online classes taught by the world's greatest minds. Now get unlimited access to all classes."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-intro")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Legal"), React.createElement("p", {
    className: "mc-text-legal"
  }, "Copyright 2018 MasterClass"), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-legal"))));
})).add('Modifiers', withInfo()(function () {
  return React.createElement("div", {
    className: "example-mc-type"
  }, React.createElement("div", {
    className: "container example--section"
  }, React.createElement("h2", {
    className: "mc-text-d1"
  }, "Modifiers"), React.createElement("p", {
    className: "mc-text-p"
  }, "All available text modifier classes.")), React.createElement("div", {
    className: "container example--section"
  }, React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Monospace"), React.createElement("p", {
    className: "mc-text--monospace"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--monospace.mc-text--uppercase.mc-text--bold")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Uppercase"), React.createElement("p", {
    className: "mc-text--uppercase"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--uppercase")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Lowercase"), React.createElement("p", {
    className: "mc-text--lowercase"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--lowercase")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Capitalize"), React.createElement("p", {
    className: "mc-text--capitalize"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--capitalize")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Bold"), React.createElement("p", {
    className: "mc-text--bold"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--bold")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Normal"), React.createElement("h1", {
    className: "mc-text-h1 mc-text--normal"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--h1.mc-text--normal")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Muted"), React.createElement("p", {
    className: "mc-text--muted"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--muted")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Invert"), React.createElement("div", {
    className: "rounded-box"
  }, React.createElement("p", {
    className: "mc-text--invert"
  }, "The quick brown fox jumped over the lazy dog.")), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--invert"))));
})).add('Alignment', withInfo()(function () {
  return React.createElement("div", {
    className: "example-mc-type"
  }, React.createElement("div", {
    className: "container example--section"
  }, React.createElement("h2", {
    className: "mc-text-d1"
  }, "Alignment"), React.createElement("p", {
    className: "mc-text-p"
  }, "Modifier classes to aid you in text alignment.")), React.createElement("div", {
    className: "container example--section"
  }, React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Align left"), React.createElement("p", {
    className: "mc-text-left"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-left")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Align Center"), React.createElement("p", {
    className: "mc-text-center"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-center")), React.createElement("div", {
    className: "align-items-right example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Align right"), React.createElement("p", {
    className: "mc-text-right"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-right")), React.createElement("div", {
    className: "align-items-right example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Responsive alignment"), React.createElement("p", {
    className: "mc-text-right mc-text-md-center"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text-right mc-text-md-center")), React.createElement("div", {
    className: "align-items-center example--section"
  }, React.createElement("h5", {
    className: "mc-text-h5"
  }, "Chaining modifiers"), React.createElement("p", {
    className: "mc-text--muted mc-text--uppercase mc-text --bold"
  }, "The quick brown fox jumped over the lazy dog."), React.createElement("p", {
    className: "mc-text--muted mc-text--monospace"
  }, ".mc-text--muted.mc-text--uppercase.mc-text--bold"))));
}));