import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { renderChildren } from '../../utils/helpers'


const BP = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
}


export default class ResponsiveHandler extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
    ]),
  }

  state = {
    isXS: false,

    isSM: false,
    ltSM: false,
    gteSM: false,

    isMD: false,
    ltMD: false,
    gteMD: false,

    isLG: false,
    ltLG: false,
    gteLG: false,

    isXL: false,
    ltXL: false,
  }

  componentDidMount () {
    window.addEventListener('resize', this.calculateSizes)
    this.calculateSizes()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.calculateSizes)
  }

  calculateSizes = () => {
    const width = window.innerWidth

    const sizes = {
      isXS: width < BP.SM,
      gteXS: width >= BP.XS,

      isSM: width >= BP.SM && width < BP.MD,
      ltSM: width < BP.SM,
      gteSM: width >= BP.SM,

      isMD: width >= BP.MD && width < BP.LG,
      ltMD: width < BP.MD,
      gteMD: width >= BP.MD,

      isLG: width >= BP.LG && width < BP.XL,
      ltLG: width < BP.LG,
      gteLG: width >= BP.LG,

      isXL: width >= BP.XL,
      ltXL: width < BP.XL,
    }

    this.setState(sizes)
  }

  render () {
    const {
      children,
    } = this.props

    return renderChildren(children, this.state)
  }
}
