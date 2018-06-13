import React from 'react'
import addonBackgrounds from "@storybook/addon-backgrounds"

// background decorator
export const backgrounds = addonBackgrounds([
  { name: 'white', value: '#fff', default: true },
  { name: 'black', value: '#000' },
])

// wrapper decorator
export const StoryWrapper = (storyFn) => (
  <div style={{ margin: '30px' }}>
    {storyFn()}
  </div>
)
