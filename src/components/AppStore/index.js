import React from 'react'
import PropTypes from 'prop-types'

import Amazon from './Amazon'
import Apple from './Apple'
import Google from './Google'
import Roku from './Roku'


const components = {
  amazon: Amazon,
  apple: Apple,
  google: Google,
  roku: Roku,
}

const AppStore = ({ kind, ...restProps }) => {
  const Component = components[kind]
  return <Component {...restProps} />
}

AppStore.propTypes = {
  kind: PropTypes.oneOf(['amazon', 'apple', 'google', 'roku']),
}


export default AppStore
