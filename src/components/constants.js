import PropTypes from 'prop-types'


export const PROP_TYPE_CHILDREN = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.func),
  PropTypes.arrayOf(PropTypes.node),
])
