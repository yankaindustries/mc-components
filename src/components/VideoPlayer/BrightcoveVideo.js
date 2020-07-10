import React from 'react'

import Video from './Video'

// account: 5344802162001
// player: 1cMNiwC9oQ
// video: 5844972668001
// policy:
// BCpkADawqM3U3jTXbQuJ1_Zax4NTXCtyzMNzIfN8Bjg8dL-
// yOcLMYks2o8BFWTuFTsX-u783Ai83BGt-
// 6y95dLi4XyKUeqrzHOsotl7boZ8qH7jlJhdIAfLNg97y5ONlbLhmEy_zgOt2-F-c

const data = {
  poster_sources: [
    {
      src: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/e7164ea1-707d-4912-9c2f-17f350f29982/1920x1080/match/image.jpg',
    },
  ],
  sources: [
    {
      ext_x_version: '4',
      type: 'application/x-mpegURL',
      src: 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/10s/master.m3u8?fastly_token=NWYwZmY0MWZfOWNkYzNjYTYzMzZlNzM0MzY1NGIzMjEwZDhiYzZlOTM3MTkyMDY5NTk0NzgxMzA0NmZkODgyNGRkN2ZhNDBjMw%3D%3D',
    },
    {
      type: 'application/dash+xml',
      src: 'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/6s/manifest.mpd?fastly_token=NWYwZmY0MWZfNjFhMmUwYzRiNGIyZTRjMWJjNDdlODNmNzg3Nzk0OGM1ZTk3MzY2NDk3MmU0M2IyZWUzZWM0YmNmOTk4ZWNiMg%3D%3D',
      profiles: 'urn:mpeg:dash:profile:isoff-live:2011',
    },
    {
      avg_bitrate: 2688000,
      width: 1280,
      src: 'https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/d09661e3-cb63-482b-93eb-32c34660c380/main.mp4?akamai_token=exp=1594881055~acl=/media/v1/pmp4/static/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/d09661e3-cb63-482b-93eb-32c34660c380/main.mp4*~hmac=b688436f85d542e7317c508528b7bc81385635cdde537d537c73cb8fcf72d09c',
      size: 206376540,
      height: 720,
      duration: 613482,
      container: 'MP4',
      codec: 'H264',
    },
  ],
  tracks: [
    {
      mime_type: 'text/webvtt',
      account_id: '5344802162001',
      default: false,
      sources: [
        {
          src: 'https://bcbolt446c5271-a.akamaihd.net/media/v1/text/vtt/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/6d08873d-bc11-4ab3-9913-26df8249b94c/text.vtt?akamai_token=exp=1594881055~acl=/media/v1/text/vtt/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/6d08873d-bc11-4ab3-9913-26df8249b94c/text.vtt*~hmac=c36232cac3025e28b3d8b15a1f98a00f0f32c9e2441ee17ffd9019655100e010',
        },
      ],
      src: 'https://bcbolt446c5271-a.akamaihd.net/media/v1/text/vtt/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/6d08873d-bc11-4ab3-9913-26df8249b94c/text.vtt?akamai_token=exp=1594881055~acl=/media/v1/text/vtt/clear/5344802162001/f2d8684c-7f73-4328-b62f-60bc5a900f57/6d08873d-bc11-4ab3-9913-26df8249b94c/text.vtt*~hmac=c36232cac3025e28b3d8b15a1f98a00f0f32c9e2441ee17ffd9019655100e010',
      asset_id: null,
      label: 'English',
      id: '6d08873d-bc11-4ab3-9913-26df8249b94c',
      kind: 'captions',
      in_band_metadata_track_dispatch_type: '',
      srclang: 'en',
    },
  ],
}


const BrightcoveVideo = ({
  // videoId,
  ...props
}) => {
  const poster = data.poster_sources.find(({ src }) =>
    src.includes(window.location.protocol),
  ) || data.poster_sources[0]

  const sources =
    data.sources
      .filter(source => !!source.src)
      .map(source => ({
        src: source.src,
        type: source.type || `video/${source.container.toLowerCase()}`,
      }))

  const { tracks } = data

  return (
    <Video
      poster={poster.src}
      controls
      autoPlay
      muted
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


export default BrightcoveVideo
