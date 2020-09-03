import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Hls from 'hls.js'


const isHls = type =>
  ['application/x-mpegURL', 'vnd.apple.mpegURL'].includes(type)


const Source = ({ src, type, videoRef }) => {
  const hls = useRef()

  useEffect(
    () => {
      if (!isHls(type) || !Hls.isSupported()) return () => {}

      hls.current = new Hls()
      hls.current.loadSource(src)
      hls.current.attachMedia(videoRef.current)

      hls.current.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('video and hls.js are now bound', src, type, hls.current)
      })

      return () => {
        hls.current.destroy()
      }
    },
    [src, type, videoRef],
  )

  if (hls.current) return null

  return (
    <source src={src} type={type} />
  )
}

Source.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  videoRef: PropTypes.object,
}

export default Source
