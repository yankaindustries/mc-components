// Resize image module was
// brought in from mc repo
const encode = (key, val) =>
  `${encodeURIComponent(key)}=${encodeURIComponent(val)}`

const resize = (url, opts) => {
  const params = Object.entries(opts).map(([key, val]) => encode(key, val))
  return `${url}?${params.join('&')}`
}

export default resize
