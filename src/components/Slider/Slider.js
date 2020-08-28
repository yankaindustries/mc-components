import React from 'react'
import PropTypes from 'prop-types'


const Slider = ({
  value,
  buffer,
  onChange,
}) => {
  const handleScrubberInteraction = scrubber => (event) => {
    const {
      left: scrubberLeft,
      width: scrubberWidth,
    } = scrubber.getBoundingClientRect()

    const {
      clientX: eventLeft,
    } = event

    const left = Math.min(Math.max(0, eventLeft - scrubberLeft), scrubberWidth)
    const value = left / scrubberWidth

    onChange(value)
  }

  const handleScrubberMouseDown = (event) => {
    const listener = handleScrubberInteraction(event.currentTarget)

    handleScrubberInteraction(event.currentTarget)(event)

    window.addEventListener('mousemove', listener)
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', listener)
    })
  }

  const bufferPerc = `${buffer * 100}%`
  const valuePerc = `${value * 100}%`

  return (
    <div
      className='mc-slider'
      onMouseDown={handleScrubberMouseDown}
    >
      <div className='mc-slider__bar'>
        <div className='mc-slider__buffer' style={{ width: bufferPerc }} />
        <div className='mc-slider__fill' style={{ width: valuePerc }} />
        <div className='mc-slider__handle-container'>
          <div className='mc-slider__handle' style={{ left: valuePerc }} />
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  buffer: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default Slider
