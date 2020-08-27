import React from 'react'
import PropTypes from 'prop-types'


const REPO_BASE_URL = 'https://github.com/yankaindustries/mc-components/blob/main/src/'

const SourceLink = ({ path }) =>
  <a
    className='example__source-link'
    href={`${REPO_BASE_URL}${path}`}
    target='_blank'
    rel='noopener noreferrer'
  >
    {'View Source'}
  </a>


SourceLink.prototype.propTypes = {
  path: PropTypes.string.isRequired,
}


export default SourceLink
