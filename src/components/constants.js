import PropTypes from 'prop-types'


export const PROP_TYPE_CHILDREN = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.arrayOf(PropTypes.func),
])
