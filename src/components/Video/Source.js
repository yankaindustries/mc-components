import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Hls from 'hls.js'

import { VideoContext } from './Video'


const isHls = type =>
  ['application/x-mpegURL', 'vnd.apple.mpegURL'].includes(type)


const Source = ({
  src,
  type,
}) => {
  const {
    hlsRef,
  } = useContext(VideoContext)

  useEffect(
    () => {
      if (!hlsRef || !isHls(type) || !Hls.isSupported()) return
      hlsRef.current.loadSource(src)
    },
    [hlsRef, src, type],
  )

  return (
    <source src={src} type={type} />
  )
}

Source.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Source
