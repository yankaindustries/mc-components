import React from 'react'
import { node, func, oneOfType, arrayOf, string, object } from 'prop-types'
import classNames from 'classnames'

import RoundedBoxHeader from '../RoundedBoxHeader'

const RoundedBox = ({
  children,
  header,
  subheader,
  style,
  className = '',
  HeaderComponent = RoundedBoxHeader,
}) => {
  const containerClassNames = classNames(
    'rounded-box',
    { [className]: Boolean(className) },
  )

  return (
    <div style={style} className={containerClassNames}>
      <HeaderComponent subheader={subheader} header={header} />
      {children}
    </div>
  )
}

RoundedBox.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
  header: string,
  subheader: string,
  className: string,
  style: object,
  HeaderComponent: func,
}

export default RoundedBox
