import PropTypes from 'prop-types'


export const STATE_DEFAULT = 'default'
export const STATE_ERROR = 'error'
export const STATE_SUCCESS = 'success'

const PROP_TYPE_MESSAGE = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
])

export const PROP_TYPE_INPUT = {
  disabled: PropTypes.bool,
  error: PROP_TYPE_MESSAGE,
  help: PROP_TYPE_MESSAGE,
  label: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  success: PROP_TYPE_MESSAGE,
  touched: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}

export const PROP_TYPE_OPTION = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

export const PROP_TYPE_OPTIONS = PropTypes.arrayOf(PROP_TYPE_OPTION)

export const PROP_TYPE_REDUX_FORM_INPUT = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

export const PROP_TYPE_REDUX_FORM_META = PropTypes.shape({
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
})

export const PROP_TYPE_REDUX_FORM_ELEMENT = {
  className: PropTypes.string,
  input: PROP_TYPE_REDUX_FORM_INPUT,
  meta: PROP_TYPE_REDUX_FORM_META,
}
