import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import VideoPlayer from './';
storiesOf('components|VideoPlayer', module).add('default', withProps(VideoPlayer)(function () {
  return React.createElement(VideoPlayer, null);
})).add('chapter video', withProps(VideoPlayer)(function () {
  return React.createElement(VideoPlayer, {
    theme: "chapter",
    endscreenComponent: React.createElement("p", null, "Endscreen Component")
  });
})).add('ambient video', withProps(VideoPlayer)(function () {
  return React.createElement(VideoPlayer, {
    isMuted: true,
    isLooped: true,
    hasControls: false
  });
}));