import compose from './compose'
import { withProps } from './addon-props'
import { withSourceLink } from './addon-source-link'


export default ({ path, component }) => {
  const addons = []

  if (path) { addons.push(withSourceLink(path)) }
  if (component) { addons.push(withProps(component)) }

  return compose(...addons)
}
