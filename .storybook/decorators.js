import React from 'react'
import addonBackgrounds from "@storybook/addon-backgrounds"

// background decorator
export const backgrounds = addonBackgrounds([
  { name: 'white', value: '#fff'},
  { name: 'black', value: '#000', default: true },
])

// wrapper decorator
export const StoryWrapper = (storyFn) => (
  <div style={{ margin: '30px' }}>
    {storyFn()}
  </div>
)
