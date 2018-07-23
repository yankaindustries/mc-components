import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import CheckOverlay from '../CheckOverlay'
import HoverHandler from '../HoverHandler'
import AnimationHandler from '../AnimationHandler'
import ImageTile from '../ImageTile'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'



// storiesOf('components|Tiles/CheckTile', module)
//   .add('default', () =>
//     <div style={{ width: '500px' }}>
//       <HoverHandler>
//         {({ hovering }) =>
//           <div>
//             <AnimationHandler
//               animation="zoom"
//               animating={hovering}
//               cropped={true}
//             >
//                 <ImageTile
//                   image={shondaRhimesThumbnail}
//                   aspectRatio='4x3'
//                 />
//             </AnimationHandler>
//
//             <AnimationHandler
//               animation="lift"
//               animating={hovering}
//             >
//               <span>Some more stuff</span>
//             </AnimationHandler>
//           </div>
//         }
//       </HoverHandler>
//     </div>
//   )
