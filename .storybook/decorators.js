import React from 'react'

// wrapper decorator
export const StoryWrapper = (storyFn) => (
  <div style={{ margin: '30px' }}>
    {storyFn()}
  </div>
)
