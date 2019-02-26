import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Separator = ({ className }) =>
  <hr className={cn('mc-hr', { [className]: !!className })} />

Separator.propTypes = {
  className: PropTypes.string,
}

Separator.defaultProps = {
  className: '',
}

export default Separator
