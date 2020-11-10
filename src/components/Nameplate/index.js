import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const getSize = (width) => {
  if (!width) { return 'unknown' }
  if (width <= 368) { return 'small' }
  if (width <= 500) { return 'medium' }
  return 'large'
}

const Nameplate = ({
  src,
  separator,
  subText,
  ...props
}) => {
  const [width, setWidth] = useState()
  const containerElement = useRef()

  const handleResize = () => {
    setWidth(containerElement.current.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  const sizeClass = getSize(width)

  return (
    <div
      ref={containerElement}
      className={cn(
        'mc-nameplate',
        `mc-nameplate--${sizeClass}`,
      )}
    >
      <div className='mc-nameplate__inner'>
        <img
          src={src}
          className='mc-nameplate__image'
         {...props}
        />

        {separator &&
          <div className={cn(
            'mc-nameplate__separator',
            `mc-nameplate__separator--${sizeClass}`,
            )}
          />
        }

        {subText &&
          <h1 className={cn({
            'mc-text-h6': sizeClass === 'small',
            'mc-text-h4': sizeClass === 'medium',
            'mc-text-h2': sizeClass === 'large',
          })}>
            {subText}
          </h1>
        }
      </div>
    </div>
  )
}

Nameplate.propTypes = {
  src: PropTypes.string.isRequired,
  separator: PropTypes.bool,
  subText: PropTypes.string,
}

export default Nameplate
