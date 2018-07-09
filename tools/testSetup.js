import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// Test react-slick
window.matchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
})
