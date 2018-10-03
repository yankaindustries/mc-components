import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Arrow from '../../Icons/Arrow'

const CarouselArrow = ({
  direction,
  className,
  onClick,
  isHidden,
}) => {
  const classNames = cn(
    'mc-carousel-arrow',
    { [className]: Boolean(className) },
    { [`mc-carousel-arrow--${direction}`]: Boolean(direction) },
  )
  return (
    <button
      className={classNames}
      onClick={onClick}
      style={isHidden ? { opacity: 0 } : null}
    >
      <Arrow className='mc-carousel-arrow__image' />
    </button>
  )
}

CarouselArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  isHidden: PropTypes.bool,
}

CarouselArrow.defaultProps = {
  isHidden: false,
}

export default CarouselArrow
