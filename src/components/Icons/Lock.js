/* eslint jsx-quotes: 0 */
import React from 'react'

const Lock = props => (
  <svg fill="none" viewBox="0 0 12 14" width="1em" height="1em" {...props}>
    <g fill="currentColor">
      <path d="M.75 13V7h10.5v6z" />
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M0 7a.75.75 0 0 1 .75-.75h10.5A.75.75 0 0 1 12 7v6a.75.75 0 0 1-.75.75H.75A.75.75 0 0 1 0 13zm1.5.75v4.5h9v-4.5zM6 1.75C4.388 1.75 3 3.159 3 5v1.25H1.5V5C1.5 2.423 3.47.25 6 .25S10.5 2.423 10.5 5v1.25H9V5c0-1.841-1.388-3.25-3-3.25z" />
      </g>
    </g>
  </svg>
)

export default Lock
