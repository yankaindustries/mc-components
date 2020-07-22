import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Video from './Video'

// account: 5344802162001
// player: 1cMNiwC9oQ
// video: 5844972668001


const requestVideo = async (videoId) => {
  const accountId = '5344802162001'
  const policyKey = 'BCpkADawqM3U3jTXbQuJ1_Zax4NTXCtyzMNzIfN8Bjg8dL-yOcLMYks2o8BFWTuFTsX-u783Ai83BGt-6y95dLi4XyKUeqrzHOsotl7boZ8qH7jlJhdIAfLNg97y5ONlbLhmEy_zgOt2-F-c'

  const baseUrl = 'https://edge.api.brightcove.com/playback/v1'
  const accountPath = `/accounts/${accountId}`
  const videoPath = `/videos/${videoId}`
  const apiUrl = `${baseUrl}${accountPath}${videoPath}`

  const response = await fetch(apiUrl, {
    headers: {
      Accept: `application/json;pk=${policyKey}`,
    },
  })

  return response.json()
}

const mapData = (response) => {
  const poster = response.poster_sources.find(({ src }) =>
    src.includes(window.location.protocol),
  ) || response.poster_sources[0]

  const sources =
    response.sources
      .filter(source => !!source.src)
      .map(source => ({
        src: source.src,
        type: source.type || `video/${source.container.toLowerCase()}`,
      }))

  const { text_tracks: tracks } = response

  return {
    poster,
    sources,
    tracks,
  }
}

const BrightcoveVideo = ({
  videoId,
  ...props
}) => {
  const [poster, setPoster] = useState({})
  const [sources, setSources] = useState([])
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    requestVideo(videoId).then((response) => {
      const {
        sources: s,
        tracks: t,
        poster: p,
      } = mapData(response)

      setPoster(p)
      setSources(s)
      setTracks(t)
    })
  }, [])

  return (
    <Video
      poster={poster.src}
      {...props}
    >
      {sources.map(source =>
        <source key={source.src} {...source} />,
      )}

      {tracks.map(track =>
        <track key={track.src} {...track} />,
      )}
    </Video>
  )
}

BrightcoveVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
}


export default BrightcoveVideo
